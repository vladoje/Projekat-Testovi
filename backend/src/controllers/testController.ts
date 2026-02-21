import { query } from "../db/db";
import { Request, Response } from "express";
import { selectPitanja } from "../utils/generateTest";
import { handleResult } from "../utils/handleResult";
import { pitanjeDB } from "../utils/testHelpers";

export async function generateTest(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;
    let category = req.params.category;
    if (Array.isArray(category)) category = category[0];

    const userResult = await query(
      "SELECT  rijesio_testova FROM users WHERE id=$1",
      [userId],
    );

    if (userResult.rowCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    const { rijesio_testova: rijesioTestova } = userResult.rows[0];

    const result = await query(
      `SELECT * FROM question_progress 
   WHERE user_id = $1 `,
      [userId],
    );
    if (!result.rows)
      return res
        .status(404)
        .send({ message: "User doesnt have any test-s in DB " }); //nebi se trebalo desiti

    const suvaPitanjaKorisnika: pitanjeDB[] = [];
    const znakoviKorisnika: pitanjeDB[] = [];
    const raskrsniceKorisnika: pitanjeDB[] = [];

    result.rows.map((r) => {
      if (r.question_categories.includes(category)) {
        switch (r.question_type) {
          case "znak":
            znakoviKorisnika.push(r);
            break;
          case "raskrsnica":
            raskrsniceKorisnika.push(r);
            break;
          case "pitanje":
            suvaPitanjaKorisnika.push(r);
            break;
        }
      }
    });

    const test = [];
    test.push(
      ...selectPitanja(
        suvaPitanjaKorisnika,
        category === "C" ? 30 : category === "D" ? 30 : 20,
        rijesioTestova,
      ),
    );

    test.push(...selectPitanja(znakoviKorisnika, 10, rijesioTestova));
    test.push(...selectPitanja(raskrsniceKorisnika, 10, rijesioTestova));
    // test=[{question_id:number}] json
    const testIds = test.map((t) => t.question_id);

    const pitanja = (
      await query(
        "SELECT *\
   FROM questions\
   WHERE question_id = ANY($1)",
        [testIds],
      )
    ).rows;

    return res.send({ message: "Success", pitanja, duzina: pitanja.length });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}
//
//
//
//

//
//
//
//

//
//
//
//
const allowedTypes = ["pitanje", "znak", "raskrsnica", "pomoc"];
export async function generateOneTypeTest(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;
    let type = req.params.type;
    if (Array.isArray(type)) type = type[0];

    if (!allowedTypes.includes(type)) {
      return res.status(400).send({ message: "Invalid test type" });
    }

    const userResult = await query(
      "SELECT category, rijesio_testova FROM users WHERE id=$1",
      [userId],
    );

    if (userResult.rowCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    const { category, rijesio_testova: rijesioTestova } = userResult.rows[0];

    const result = await query(
      `
  SELECT *
  FROM question_progress
  WHERE user_id = $1
    AND question_type = $2
   AND question_categories LIKE '%' || $3 || '%'
  `,
      [userId, type, category],
    );
    if (!result.rows)
      return res
        .status(404)
        .send({ message: "User doesnt have any test-s in DB " }); //nebi se trebalo desiti

    const pitanjaKorisnika = result.rows.filter((r) => {
      return r.question_categories.includes(category);
    });

    const test = [
      ...selectPitanja(
        pitanjaKorisnika,
        type === "pomoc" ? 10 : 20,
        rijesioTestova,
      ),
    ];
    const testIds = test.map((t) => t.question_id);
    const pitanja = (
      await query(
        "SELECT *\
   FROM questions\
   WHERE question_id = ANY($1)",
        [testIds],
      )
    ).rows;

    return res.send({ message: "Success", pitanja, duzina: pitanja.length });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}

interface results {
  question_id: number;
  answer: boolean;
}
// question: pitanjeDB,
// isCorrect: boolean,
// testNumber: number,

export async function handleResults(req: Request, res: Response) {
  await query("BEGIN");
  try {
    const userId = (req as any).userId;
    const { results }: { results: results[] } = req.body;
    if (!results) {
      return res.status(400).send("Invalid body");
    }
    const {
      rows: [{ rijesio_testova }],
    } = await query(
      `UPDATE users SET rijesio_testova = rijesio_testova + 1 WHERE id = $1 RETURNING rijesio_testova`,
      [userId],
    );

    const testNumber = rijesio_testova;
    const questionIdsInput = results.map((r) => r.question_id);

    const { rows: questions } = await query(
      `
      SELECT *
      FROM question_progress
      WHERE user_id = $1
        AND question_id = ANY($2)
      `,
      [userId, questionIdsInput],
    );

    if (questions.length !== results.length) {
      return res.status(400).send("Nesto ne valja");
    }
    const resultsMap = new Map(results.map((r) => [r.question_id, r.answer]));
    const updatedQuestions = questions.map((q) => {
      const answer = resultsMap.get(q.question_id) || false;
      return handleResult(q, answer, testNumber);
    });

    if (updatedQuestions.length > 0) {
      await query(
        `
        UPDATE question_progress qp
        SET
          times_seen = data.times_seen,
          last_seen_at = data.last_seen_at,
          last_result = data.last_result,
          consecutive_correct = data.consecutive_correct,
          recommended_until = data.recommended_until
        FROM (
          SELECT
            unnest($1::int[]) AS question_id,
            unnest($2::int[]) AS times_seen,     
            unnest($3::int[]) AS last_seen_at,   
            unnest($4::boolean[]) AS last_result,
            unnest($5::int[]) AS consecutive_correct,
            unnest($6::int[]) AS recommended_until
        ) AS data
        WHERE
          qp.user_id = $7
          AND qp.question_id = data.question_id
          
        `,
        [
          updatedQuestions.map((q) => q.question_id),
          updatedQuestions.map((q) => q.times_seen),
          updatedQuestions.map((q) => q.last_seen_at),
          updatedQuestions.map((q) => q.last_result),
          updatedQuestions.map((q) => q.consecutive_correct),
          updatedQuestions.map((q) => q.recommended_until),
          userId,
        ],
      );
    }

    await query("COMMIT");
    return res.status(200).send({ message: "Success" });
  } catch (err) {
    await query("ROLLBACK");
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}
// import fs from "fs";
// import path from "path";

// const znakoviP = path.join(`${__dirname}/../../data`, "znakovi.json");
// const raskrsniceP = path.join(`${__dirname}/../../data`, "raskrsnice.json");
// const pitanjaP = path.join(`${__dirname}/../../data`, "suva_pitanja.json");

// const rawZnakovi = fs.readFileSync(znakoviP, "utf-8");
// const rawRaskrsnice = fs.readFileSync(raskrsniceP, "utf-8");
// const rawPitanja = fs.readFileSync(pitanjaP, "utf-8");

// const znakovi: znak[] = JSON.parse(rawZnakovi);
// const raskrsnice: znak[] = JSON.parse(rawRaskrsnice);
// const pitanja: suvo[] = JSON.parse(rawPitanja);

// interface znak {
//   index: number;
//   question_text: string;
//   answer_1_text: string;
//   answer_2_text: string;
//   answer_3_text?: string;
//   answer_4_text?: string;
//   correct_answer: number[];
//   type: string;
// }
// interface suvo {
//   index: number;
//   question_text: string;
//   answer_1_text: string;
//   answer_2_text: string;
//   answer_3_text?: string;
//   answer_4_text?: string;
//   answer_5_text?: string;
//   correct_answer: number[];
//   categories: string[];
//   type: string;
// }
// export function selectRandom10Znak() {
//   return shuffle<znak>(znakovi)
//     .slice(0, 10)
//     .map((pitanje) => ({
//       index: pitanje.index,
//       type: pitanje.type,
//     }));
// }
// export function selectRandom10Raskrsnica() {
//   return shuffle<znak>(raskrsnice)
//     .slice(0, 10)
//     .map((pitanje) => ({
//       index: pitanje.index,
//       type: pitanje.type,
//     }));
// }
// export function selectRandomSuvaPitanja(category: string) {
//   let broj = 20;
//   if (category === "C" || category === "D") broj = 30;
//   const filtirana: suvo[] = pitanja.filter((pitanje) =>
//     pitanje.categories.includes(category),
//   );
//   return shuffle<suvo>(filtirana)
//     .slice(0, broj)
//     .map((pitanje) => ({
//       index: pitanje.index,
//       type: pitanje.type,
//     }));
// }

// export async function generateRandomTest(req: Request, res: Response) {
//   try {
//     const userId = (req as any).userId;
//     const categoryy = await query("SELECT category FROM users WHERE id=$1", [
//       userId,
//     ]);
//     const category = categoryy.rows[0];
//     const test = [];
//     test.push(...selectRandomSuvaPitanja(category));
//     test.push(...selectRandom10Znak());
//     test.push(...selectRandom10Raskrsnica());
//     return res.send({ message: "Success", test });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({ message: "Internal server error" });
//   }
// }

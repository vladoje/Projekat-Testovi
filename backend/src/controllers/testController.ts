import { query } from "../db/db";
import { Request, Response } from "express";
import { selectPitanja } from "../utils/generateTest";
import { handleResult } from "../utils/handleResult";

export async function generateTest(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;
    const category: string = (
      await query("SELECT category FROM users WHERE id=$1", [userId])
    ).rows[0];
    const rijesioTestova: number = (
      await query("SELECT rijesio_testova FROM users WHERE id=$1", [userId])
    ).rows[0];

    const result = await query(
      `SELECT * FROM question_progress 
   WHERE user_id = $1 AND question_type IN ('pitanje', 'znak', 'raskrsnica')`,
      [userId],
    );

    const suvaPitanjaKorisnika = result.rows.filter(
      (r) => r.question_type === "pitanje",
    );
    const znakoviKorisnika = result.rows.filter(
      (r) => r.question_type === "znak",
    );
    const raskrsniceKorisnika = result.rows.filter(
      (r) => r.question_type === "raskrsnica",
    );
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
    return res.send({ message: "Success", test });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}

interface results {
  question_id: number;
  question_type: string;
  answer: boolean;
}
// question: pitanjeDB,
// isCorrect: boolean,
// testNumber: number,

export async function handleResults(req: Request, res: Response) {
  await query("BEGIN");
  try {
    const userId = (req as any).userId;
    const results: results[] = req.body;
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
    const questionTypesInput = results.map((r) => r.question_type);

    const { rows: questions } = await query(
      `
      SELECT *
      FROM question_progress
      WHERE user_id = $1
        AND question_id = ANY($2)
        AND question_type = ANY($3)
      `,
      [userId, questionIdsInput, questionTypesInput],
    );

    const resultsMap = new Map(
      results.map((r) => [`${r.question_id}-${r.question_type}`, r.answer]),
    );

    const updatedQuestions = questions.map((q) => {
      const answer =
        resultsMap.get(`${q.question_id}-${q.question_type}`) || false;
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
            unnest($2::text[]) AS question_type, 
            unnest($3::int[]) AS times_seen,     
            unnest($4::int[]) AS last_seen_at,   
            unnest($5::boolean[]) AS last_result,
            unnest($6::int[]) AS consecutive_correct,
            unnest($7::int[]) AS recommended_until
        ) AS data
        WHERE
          qp.user_id = $8
          AND qp.question_id = data.question_id
          AND qp.question_type = data.question_type
        `,
        [
          updatedQuestions.map((q) => q.question_id),
          updatedQuestions.map((q) => q.question_type),
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

import { Request, Response } from "express";
import { query } from "../../db/db";
import {
  getQuestionsByIds,
  splitQuestionsByType,
} from "../../utils/testHelpers";
import { selectPitanja } from "../../utils/generateTest";

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
    const { suvaPitanjaKorisnika, znakoviKorisnika, raskrsniceKorisnika } =
      splitQuestionsByType(result.rows, category);

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

    const pitanja = await getQuestionsByIds(testIds);

    return res.send({ message: "Success", pitanja, duzina: pitanja.length });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}

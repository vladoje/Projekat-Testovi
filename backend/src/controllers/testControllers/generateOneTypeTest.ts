import { Request, Response } from "express";
import { query } from "../../db/db";
import { selectPitanja } from "../../utils/generateTest";
import { getQuestionsByIds } from "../../utils/testHelpers";

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
    const pitanja = await getQuestionsByIds(testIds);
    return res.send({ message: "Success", pitanja, duzina: pitanja.length });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal server error" });
  }
}

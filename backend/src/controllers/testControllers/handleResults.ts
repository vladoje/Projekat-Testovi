import { Request, Response } from "express";
import { query } from "../../db/db";
import { handleResult } from "../../utils/handleResult";

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

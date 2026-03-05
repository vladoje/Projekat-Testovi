import { query } from "../db/db";

export default async function generateStarterProgress(user_id: number) {
  await query(
    `
    INSERT INTO question_progress
      (user_id, question_id, recommended_until, consecutive_correct, last_seen_at, question_type, times_seen, last_result,question_categories)
    SELECT $1, question_id, 0, 0, 0, type, 0, false,categories
    FROM questions
    `,
    [user_id],
  );
}

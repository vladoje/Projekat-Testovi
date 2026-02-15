import { query } from "../db/db";

interface suvo {
  question_id: number;
  question_text: string;
  answer_1_text: string;
  answer_2_text: string;
  answer_3_text?: string;
  answer_4_text?: string;
  answer_5_text?: string;
  correct_answer: number[];
  categories: string;
  type: string;
}

interface tipIID {
  question_id: number;
  type: string;
}
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

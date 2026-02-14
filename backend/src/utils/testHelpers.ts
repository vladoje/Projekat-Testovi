/*

Priority = (Urgency times 2) + (Weakness times 1.5) + Difficulty


*/
export interface pitanjeDB {
  question_progress_id: number;
  question_id: number;
  user_id: number;
  question_type: string;

  recommended_until: number;
  last_seen_at: number;

  times_seen: number;
  last_result: boolean;
  consecutive_correct: number;

  created_at: Date;
}

export function shuffle<T>(array: T[]): T[] {
  // Defensive check: ako nije niz ili je prazan
  if (!Array.isArray(array) || array.length === 0) return [];

  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
export function priority(q: pitanjeDB, rijesioTestova: number) {
  let score = 0;
  if (q.times_seen < 3) {
    score += 6 - q.times_seen;
  } else if (q.last_result === false) {
    score += 5;
  }
  // 3. Preporuka za ponavljanje
  if (q.recommended_until <= rijesioTestova) {
    score += 4;
  }
  // 4. Slabo znanje / streak
  score += Math.max(0, 3 - q.consecutive_correct);

  return score;
}

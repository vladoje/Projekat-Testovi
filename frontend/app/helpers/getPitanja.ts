// import fs from "fs/promises";

// interface pitanje {
//   question_id: number;
//   question_text: string;
//   answer_1_text: string;
//   answer_2_text: string;
//   answer_3_text?: string;
//   answer_4_text?: string;
//   answer_5_text?: string;
//   correct_answer: number[];
//   categories: string;
//   type: string;
// }

// export async function getPitanja(pitanjaID: number[]): Promise<pitanje[]> {
//   const data = await fs.readFile("../data/questions.json", "utf-8");
//   const pitanja: pitanje[] = JSON.parse(data);

//   return pitanja.filter((p) => pitanjaID.includes(p.question_id));
// }

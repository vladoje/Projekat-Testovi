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

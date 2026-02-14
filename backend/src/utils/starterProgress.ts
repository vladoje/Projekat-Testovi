import fs from "fs";
import path from "path";

const znakoviP = path.join(`${__dirname}/../../data`, "znakovi.json");
const raskrsniceP = path.join(`${__dirname}/../../data`, "raskrsnice.json");
const pitanjaP = path.join(`${__dirname}/../../data`, "suva_pitanja.json");

const rawZnakovi = fs.readFileSync(znakoviP, "utf-8");
const rawRaskrsnice = fs.readFileSync(raskrsniceP, "utf-8");
const rawPitanja = fs.readFileSync(pitanjaP, "utf-8");

const znakovi: znak[] = JSON.parse(rawZnakovi);
const raskrsnice: znak[] = JSON.parse(rawRaskrsnice);
const pitanja: suvo[] = JSON.parse(rawPitanja);

interface znak {
  index: number;
  question_text: string;
  answer_1_text: string;
  answer_2_text: string;
  answer_3_text?: string;
  answer_4_text?: string;
  correct_answer: number[];
  type: string;
}
interface suvo {
  index: number;
  question_text: string;
  answer_1_text: string;
  answer_2_text: string;
  answer_3_text?: string;
  answer_4_text?: string;
  answer_5_text?: string;
  correct_answer: number[];
  categories: string[];
  type: string;
}
export default async function generateStarterProgress() {}

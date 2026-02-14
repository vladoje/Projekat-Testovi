const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "suva_pitanja.json");
const outputPath = path.join(__dirname, "questions_with_type.json");

// 1. Učitaj fajl
const raw = fs.readFileSync(inputPath, "utf-8");
const questions = JSON.parse(raw);

// 2. Dodaj type
const updatedQuestions = questions.map((q) => ({
  ...q,
  type: "pitanje", // PROMIJENI PO POTREBI
}));

// 3. Snimi novi fajl
fs.writeFileSync(
  outputPath,
  JSON.stringify(updatedQuestions, null, 2),
  "utf-8",
);

console.log("✅ Type dodat svim pitanjima");

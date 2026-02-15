// import { fileURLToPath } from "url";

// import fs from "fs";
// import pkg from "pg";
// import dotenv from "dotenv";
// import path from "path";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, "../.env") });

// const { Pool } = pkg;
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// async function seed() {
//   const client = await pool.connect();

//   try {
//     const { rows } = await client.query("SELECT COUNT(*) FROM questions");

//     if (parseInt(rows[0].count) > 0) {
//       console.log("Pitanja već postoje. Preskačem seed.");
//       return;
//     }

//     const suva = JSON.parse(fs.readFileSync("suva_pitanja.json", "utf-8"));
//     const znakovi = JSON.parse(fs.readFileSync("znakovi.json", "utf-8"));
//     const raskrsnice = JSON.parse(fs.readFileSync("raskrsnice.json", "utf-8"));
//     const data = [...suva, ...znakovi, ...raskrsnice];
//     // 3️⃣ Ubacivanje
//     await client.query("BEGIN");
//     for (const q of data) {
//       q.categories = normalizeCategories(q.categories);
//       await client.query(
//         `
//         INSERT INTO questions
//         (question_text, answer_1_text, answer_2_text, answer_3_text,answer_4_text,answer_5_text,
//          correct_answer, categories, type)
//         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
//         `,
//         [
//           q.question_text,
//           q.answer_1_text,
//           q.answer_2_text,
//           q.answer_3_text || null,
//           q.answer_4_text || null,
//           q.answer_5_text || null,
//           q.correct_answer,
//           q.categories,
//           q.type,
//         ],
//       );
//     }
//     await client.query("COMMIT");
//     console.log("Seed završen uspješno.");
//   } catch (e) {
//     console.log(e);
//     await client.query("ROLLBACK");
//   } finally {
//     client.release();
//     console.log("Seed završen uspješno.");
//   }
// }

// seed();
// function normalizeCategories(categories) {
//   // ako nema kategorija → sve
//   if (!categories) {
//     return "A,B,C,D,T";
//   }

//   // ako je array → string
//   if (Array.isArray(categories)) {
//     return categories.join(",");
//   }

//   // ako je string → očisti razmake
//   if (typeof categories === "string") {
//     return categories.replace(/\s+/g, "");
//   }

//   // fallback
//   return "A,B,C,D,T";
// }

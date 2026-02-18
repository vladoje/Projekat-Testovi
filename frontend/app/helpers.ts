/* S Z R P */
// const brojSuvihPitanja = [
//   { kategorija: "A", br: "309" },
//   { kategorija: "B", br: "367" },
//   { kategorija: "C", br: "393" },
//   { kategorija: "D", br: "353" },
//   { kategorija: "T", br: "260" },
// ];
// const brojZnakova = "109";
// const brojRaskrsnica = "110";
// const brojPrvePomoci = "100";

// const brojKategorijaSuvihPitanja = [
//   { kategorija: "A", br: "16" },
//   { kategorija: "B", br: "19" },
//   { kategorija: "C", br: "20" },
//   { kategorija: "D", br: "18" },
//   { kategorija: "T", br: "13" },
// ];
// const brojKategorijaZnakova = "11";
// const brojKategorijaRaskrsnica = "11";
// const brojKategorijaPrvePomoci = "10";

export function getCategory(a: string) {
  return `${a} Kategoriju`;
}
// export function getBrPitanja(a: string, b?: string) {
//   if (b) {
//     //a=S
//     return brojSuvihPitanja.find((pitanje) => pitanje.kategorija === b)?.br;
//   } else {
//     return a === "Z"
//       ? brojZnakova
//       : a === "R"
//         ? brojRaskrsnica
//         : a === "P"
//           ? brojPrvePomoci
//           : "1";
//   }
// }
// export function getBrCategory(a: string, b?: string) {
//   if (b) {
//     //a=S
//     return brojKategorijaSuvihPitanja.find(
//       (pitanje) => pitanje.kategorija === b,
//     )?.br;
//   } else {
//     return a === "Z"
//       ? brojKategorijaZnakova
//       : a === "R"
//         ? brojKategorijaRaskrsnica
//         : a === "P"
//           ? brojKategorijaPrvePomoci
//           : "1";
//   }
// }

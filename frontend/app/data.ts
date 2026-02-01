export type cat = {
  label: string;
  opis: string;
  testText: string;
};
export const categorije: cat[] = [
  {
    label: "A kategorija",
    opis: "Motocikli",
    testText:
      "ispit za A kategoriju se sastoji od 20 suvih pitanja,10 pitanja oko znakova i 10 pitanja oko raskrsnica. Maksimalan broj bodova je 120 a minimalan za prolaz 108",
  },
  {
    label: "B kategorija",
    opis: "Automobil",
    testText:
      "ispit za B kategoriju se sastoji od 20 suvih pitanja,10 pitanja oko znakova i 10 pitanja oko raskrsnica. Maksimalan broj bodova je 120 a minimalan za prolaz 108",
  },
  {
    label: "C kategorija",
    opis: "Kamion i kamion do 7.5t",
    testText:
      "ispit za C kategoriju se sastoji od 30 suvih pitanja,10 pitanja oko znakova i 10 pitanja oko raskrsnica. Maksimalan broj bodova je 140 a minimalan za prolaz 126",
  },
  {
    label: "D kategorija",
    opis: "Autobus",
    testText:
      "ispit za D kategoriju se sastoji od 30 suvih pitanja,10 pitanja oko znakova i 10 pitanja oko raskrsnica. Maksimalan broj bodova je 140 a minimalan za prolaz 126",
  },
  {
    label: "T kategorija",
    opis: "Traktor,radne masine",
    testText:
      "ispit za T kategoriju se sastoji od 20 suvih pitanja,10 pitanja oko znakova i 10 pitanja oko raskrsnica. Maksimalan broj bodova je 120 a minimalan za prolaz 108",
  },
  {
    label: "Prva pomoc",
    opis: "Prva pomoc",
    testText:
      "ispit za Prvu pomoc se sastoji od 10 pitanja. Maksimalan broj bodova je 10 a minimalan za prolaz 9",
  },
];
//dinamicni test Text
export const lekcije: cat[] = [
  {
    label: "Suva pitanja",
    opis: "Suva pitanja iz propisa za sve kategorije",
    testText:
      "Propisi za () kategoriju se sastoje od () pitanja podijeljenih na () kategorija",
  },
  {
    label: "Znakovi",
    opis: "Pitanja oko znakova za sve kategorije",
    testText: "",
  },
  {
    label: "Raskrsnice",
    opis: "Pitanja oko raskrsnica za sve kategorije",
    testText: "",
  },
  {
    label: "Prva pomoc",
    opis: "Pitanja oko prve pomoci",
    testText: "",
  },
];

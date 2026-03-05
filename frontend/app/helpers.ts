export function getCategory(a: string) {
  return `${a} Kategoriju`;
}
export function getBodova(rjesenja: boolean[], cat: string, duzina: number) {
  let brojBodeva = 0;
  let maxBodova = duzina;
  let brSuvih;
  let brZnakova;
  let brRaskrsnica;
  switch (cat) {
    case "A":
      brSuvih = rjesenja.slice(0, 20).filter(Boolean).length;
      brZnakova = rjesenja.slice(20, 30).filter(Boolean).length;
      brRaskrsnica = rjesenja.slice(30, 40).filter(Boolean).length;
      brojBodeva = brSuvih * 2 + brZnakova * 3 + brRaskrsnica * 5;
      maxBodova = 120;
      break;
    case "B":
      brSuvih = rjesenja.slice(0, 20).filter(Boolean).length;
      brZnakova = rjesenja.slice(20, 30).filter(Boolean).length;
      brRaskrsnica = rjesenja.slice(30, 40).filter(Boolean).length;
      brojBodeva = brSuvih * 2 + brZnakova * 3 + brRaskrsnica * 5;
      maxBodova = 120;
      break;
    case "C":
      brSuvih = rjesenja.slice(0, 30).filter(Boolean).length;
      brZnakova = rjesenja.slice(30, 40).filter(Boolean).length;
      brRaskrsnica = rjesenja.slice(40, 50).filter(Boolean).length;
      brojBodeva = brSuvih * 2 + brZnakova * 3 + brRaskrsnica * 5;
      maxBodova = 140;
      break;
    case "D":
      brSuvih = rjesenja.slice(0, 30).filter(Boolean).length;
      brZnakova = rjesenja.slice(30, 40).filter(Boolean).length;
      brRaskrsnica = rjesenja.slice(40, 50).filter(Boolean).length;
      brojBodeva = brSuvih * 2 + brZnakova * 3 + brRaskrsnica * 5;
      maxBodova = 140;
      break;
    case "T":
      brSuvih = rjesenja.slice(0, 20).filter(Boolean).length;
      brZnakova = rjesenja.slice(20, 30).filter(Boolean).length;
      brRaskrsnica = rjesenja.slice(30, 40).filter(Boolean).length;
      brojBodeva = brSuvih * 2 + brZnakova * 3 + brRaskrsnica * 5;
      maxBodova = 120;
      break;
    case "S":
      brojBodeva = rjesenja.filter(Boolean).length;
      maxBodova = duzina;
      break;
    case "Z":
      brojBodeva = rjesenja.filter(Boolean).length;
      maxBodova = duzina;
      break;
    case "R":
      brojBodeva = rjesenja.filter(Boolean).length;
      maxBodova = duzina;
      break;
    case "P":
      brojBodeva = rjesenja.filter(Boolean).length;
      maxBodova = duzina;
      break;
  }
  return [brojBodeva, maxBodova];
}

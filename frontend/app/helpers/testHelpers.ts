// export function generateChoisesMade(
// answers:string[]
// ) {
//   const lista = [answers.includes("a") && "a", answers.includes("a") && "b", answers.includes("a") && "c", answers.includes("a") && "d", e && "e"].filter(
//     Boolean,
//   ) as string[];

//   if (lista.length > 0) return lista;

//   return undefined;
// }
export function isTrue(correctArr: number[], answers: string[]) {
  const user = [
    answers.includes("a"),
    answers.includes("b"),
    answers.includes("c"),
    answers.includes("d"),
    answers.includes("e"),
  ];
  const target = [1, 2, 3, 4, 5].map((char) => correctArr.includes(char));
  return user.every((val, idx) => val === target[idx]);
}

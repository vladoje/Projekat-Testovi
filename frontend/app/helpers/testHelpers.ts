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

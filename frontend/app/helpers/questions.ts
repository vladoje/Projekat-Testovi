import type { pitanje } from "~/hooks/useTestData";

export async function getQuestions() {
  const loginRes = await fetch(
    "https://projekat-testovi.onrender.com/user/questions",
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!loginRes.ok) {
    throw new Error("GET failed s");
  }
  const data = await loginRes.json();
  return data; // ili samo return true
}
export async function updateQuestions(pitanja: pitanje[], rjesenja: boolean[]) {
  const rj = pitanja.map((pitanje, idx) => {
    const isCorrect = rjesenja[idx];
    return { question_id: pitanje.question_id, answer: isCorrect };
  });
  const loginRes = await fetch(
    "https://projekat-testovi.onrender.com/test/handle-results",
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ results: rj }),
    },
  );
  if (!loginRes.ok) {
    throw new Error("Update failed");
  }
  const data = await loginRes.json();
  return data; // ili samo return true
}

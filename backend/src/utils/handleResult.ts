//dodati globalni difficulty na pitanja gledajuci koliko ljudi grijese na pitanje
// FAZA 2

import { pitanjeDB } from "./testHelpers";

export function handleResult(
  question: pitanjeDB,
  isCorrect: boolean,
  testNumber: number,
) {
  const editedQ = { ...question };

  editedQ.times_seen += 1;
  editedQ.last_seen_at = testNumber;

  if (isCorrect) {
    //korisnik je tacno odgovorio na pitanje
    editedQ.last_result = true;
    editedQ.recommended_until =
      testNumber + Math.min(50, Math.pow(2, editedQ.consecutive_correct));
    editedQ.consecutive_correct = editedQ.consecutive_correct + 1;
  } else {
    //korisnik je ofulao odgovor na pitanje
    editedQ.last_result = false;
    editedQ.recommended_until = testNumber + 2;
    editedQ.consecutive_correct = 0;
  }

  return editedQ;
}

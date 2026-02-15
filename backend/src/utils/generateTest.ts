/*smanjiti ako je moguce array metode filter i shufle */

import { pitanjeDB, priority, shuffle } from "./testHelpers";

export function selectPitanja(
  pitanja: pitanjeDB[],
  broj: number,
  rijesioTestova: number,
) {
  const testIds = new Set<number>();
  const konacniTest: pitanjeDB[] = [];

  const dodajUTest: (p: pitanjeDB) => boolean = (p: pitanjeDB) => {
    console.log(p);
    if (p && konacniTest.length < broj && !testIds.has(p.question_id)) {
      testIds.add(p.question_id);
      konacniTest.push(p);
      return true;
    }
    return false;
  };

  bucketQuestions(pitanja, broj, rijesioTestova, dodajUTest, konacniTest);

  weightQuestions(
    pitanja,
    testIds,
    rijesioTestova,
    konacniTest,
    broj,
    dodajUTest,
  );

  return shuffle(konacniTest).map((p) => ({
    question_id: p.question_id,
  }));
}

function weightQuestions(
  pitanja: pitanjeDB[],
  testIds: Set<number>,
  rijesioTestova: number,
  konacniTest: pitanjeDB[],
  broj: number,
  dodajUTest: (p: pitanjeDB) => boolean,
) {
  const weightPitanja = pitanja
    .filter((p) => !testIds.has(p.question_id))
    .map((p) => ({ ...p, weight: priority(p, rijesioTestova) }))
    .filter((p) => p.weight > 0);

  while (konacniTest.length < broj && weightPitanja.length > 0) {
    let sum = 0;
    for (const p of weightPitanja) sum += p.weight;

    const r = Math.random() * sum;
    let acc = 0;
    let index = 0;

    for (let i = 0; i < weightPitanja.length; i++) {
      acc += weightPitanja[i].weight;
      if (acc >= r) {
        index = i;
        break;
      }
    }

    const picked = weightPitanja.splice(index, 1)[0];

    dodajUTest(picked);
  }
}

function bucketQuestions(
  // dinamicni procenti greske/nova pitanja/ziceri
  pitanja: pitanjeDB[],
  broj: number,
  rijesioTestova: number,
  dodajUTest: (p: pitanjeDB) => boolean,
  konacniTest: pitanjeDB[],
) {
  const procenatGresaka = broj * 0.2;
  const procenatNenaucenih = broj * 0.1;
  const procenatNovih = broj * 0.2;

  getPitanja(pitanja, rijesioTestova, 1, 5)
    .slice(0, procenatGresaka)
    .forEach(dodajUTest);

  //mada bitno da je samo low br zaredom
  getPitanja(pitanja, rijesioTestova, 2, 6)
    .slice(0, procenatNenaucenih)
    .forEach(dodajUTest);

  getPitanja(pitanja, rijesioTestova, 3)
    .slice(0, procenatNovih)
    .forEach(dodajUTest);

  getPitanja(pitanja, rijesioTestova, 4)
    .slice(0, Math.floor(broj / 2 - konacniTest.length))
    .forEach(dodajUTest);
}

function getPitanja(
  pitanja: pitanjeDB[],
  rijesioTestova: number,
  uslovN: number,
  uslovN2?: number,
) {
  const filtriranaPitanja = shuffle(
    pitanja.filter((r) => getUslov(r, uslovN, rijesioTestova)),
  );
  if (uslovN2) {
    filtriranaPitanja.push(
      ...shuffle(pitanja.filter((r) => getUslov(r, uslovN2, rijesioTestova))),
    );
  }
  return filtriranaPitanja;
}

function getUslov(r: pitanjeDB, uslovN: number, rijesioTestova: number) {
  switch (uslovN) {
    case 1:
      return !r.last_result && r.recommended_until <= rijesioTestova;
    case 2:
      return (
        r.last_result &&
        r.recommended_until <= rijesioTestova &&
        r.consecutive_correct < 3
      );
    case 3:
      return r.times_seen <= 1;
    case 4:
      return r.consecutive_correct > 2 && r.recommended_until <= rijesioTestova;
    case 5:
      return !r.last_result;
    case 6:
      return r.last_result && r.consecutive_correct < 3;
  }
}

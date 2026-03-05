import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { isTrue } from "~/helpers/testHelpers";
import { useRjesenja } from "~/store";
import type { pitanje } from "./useTestData";

function useTest() {
  const ucenje = useLocation().pathname.split("/").at(4) === "ucenje";
  const navigate = useNavigate();

  const [setRjesenja, choises, zapamtiOdgovor] = [
    useRjesenja().dodaj,
    useRjesenja().choises,
    useRjesenja().zapamtiOdgovor,
  ];
  const [i, setI] = useState(1);

  const [answers, setAnswers] = useState(choises[i - 2]?.checkedAnswers);

  useEffect(() => {
    const prethodniOdgovori =
      choises.find((c) => c.i === i)?.checkedAnswers || [];

    setAnswers(prethodniOdgovori);
  }, [i, choises]); //

  const handleNext = (
    trenutnoPitanje: pitanje,
    duzina: number,
    cat: string,
  ) => {
    // 1. Izračunaj da li je tačno
    const tacno = isTrue(trenutnoPitanje?.correct_answer || [], answers || []);
    if (ucenje && !tacno) {
      toast.error("Niste odgovorili tacno na ovo pitanje", { duration: 1000 });
    } else {
      // 2. Pripremi odgovore

      // 3. Snimi SVE u store
      setRjesenja(tacno);
      zapamtiOdgovor(i, answers);

      // 4. Provjeri da li je kraj
      if (i >= duzina) {
        // Mala pauza (timeout 0) dopušta Reactu da završi state update prije navigacije
        setTimeout(() => navigate(`/results/${cat}`), 10);
      } else {
        // Idi na sljedeće i resetuj lokalni state
        setI(i + 1);
        setAnswers([]);
      }
    }
  };
  function handleSelect(trenutnoPitanje: pitanje) {
    const tacno = isTrue(trenutnoPitanje?.correct_answer || [], answers || []);
    if (ucenje && !tacno) {
      toast.error("Niste odgovorili tacno na ovo pitanje", { duration: 1000 });
    } else {
      setRjesenja(tacno);
      zapamtiOdgovor(i, answers);
      setAnswers([]);
    }
  }
  return { i, setI, answers, setAnswers, handleNext, handleSelect };
}

export default useTest;

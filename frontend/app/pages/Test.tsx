import { useEffect, useRef, useState, type MouseEventHandler } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  Link,
  useLocation,
  useNavigate,
  type NavigateFunction,
} from "react-router";
import Header from "~/components/Header";
import { OptionCard } from "~/components/OptionCard";
import { pitanja } from "~/pitanja";
import { useRjesenja } from "../store";
import toast from "react-hot-toast";

function Test() {
  const ucenje = useLocation().pathname.split("/").at(4) === "ucenje";
  const navigate = useNavigate();
  const [i, setI] = useState(1);

  const [setRjesenja, ukiniJedan, choises, zapamtiOdgovor] = [
    useRjesenja().dodaj,
    useRjesenja().oduzmi,
    useRjesenja().choises,
    useRjesenja().zapamtiOdgovor,
  ];

  const [isCheckedA, setIsCheckedA] = useState(
    choises[i - 2]?.checkedAnswers?.includes("a") || false,
  );
  const [isCheckedB, setIsCheckedB] = useState(
    choises[i - 2]?.checkedAnswers?.includes("b") || false,
  );
  const [isCheckedC, setIsCheckedC] = useState(
    choises[i - 2]?.checkedAnswers?.includes("c") || false,
  );
  const [isCheckedD, setIsCheckedD] = useState(
    choises[i - 2]?.checkedAnswers?.includes("d") || false,
  );

  const trenutnoPitanje = pitanja.find((p) => p.i === i) || pitanja[0];

  const handleNext = () => {
    // 1. Izračunaj da li je tačno
    const tacno = isTrue(
      trenutnoPitanje.correct,
      isCheckedA,
      isCheckedB,
      isCheckedC,
      isCheckedD,
    );
    if (ucenje && !tacno) {
      toast.error("Niste odgovorili tacno na ovo pitanje", { duration: 1000 });
    } else {
      // 2. Pripremi odgovore
      const selektovano = generateChoisesMade(
        isCheckedA,
        isCheckedB,
        isCheckedC,
        isCheckedD,
      );

      // 3. Snimi SVE u store
      setRjesenja(tacno);
      zapamtiOdgovor(i, selektovano);

      // 4. Provjeri da li je kraj
      if (i >= pitanja.length) {
        // Mala pauza (timeout 0) dopušta Reactu da završi state update prije navigacije
        setTimeout(() => navigate("/results/A"), 10);
      } else {
        // Idi na sljedeće i resetuj lokalni state
        setI(i + 1);
        setIsCheckedA(false);
        setIsCheckedB(false);
        setIsCheckedC(false);
        setIsCheckedD(false);
      }
    }
  };

  useEffect(() => {
    const prethodniOdgovori =
      choises.find((c) => c.i === i)?.checkedAnswers || [];

    setIsCheckedA(prethodniOdgovori.includes("a"));
    setIsCheckedB(prethodniOdgovori.includes("b"));
    setIsCheckedC(prethodniOdgovori.includes("c"));
    setIsCheckedD(prethodniOdgovori.includes("d"));
  }, [i, choises]); //
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      <Kockice i={i} />

      <main className="max-w-md mx-auto px-6 py-8">
        {/* PITANJE */}
        <div className="mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">
            Pitanje {i} od {pitanja.length}
          </span>
          <h1 className="text-xl font-bold text-slate-800 dark:text-white mt-2 leading-snug">
            {trenutnoPitanje.q}
          </h1>
        </div>

        {/* ODGOVORI - Custom Checkbox Kartice */}
        <div className="space-y-3">
          <OptionCard
            label="A"
            text={trenutnoPitanje.a}
            checked={isCheckedA}
            onChange={() => setIsCheckedA((a) => !a)}
          />
          <OptionCard
            label="B"
            text={trenutnoPitanje.b}
            checked={isCheckedB}
            onChange={() => setIsCheckedB((a) => !a)}
          />
          {trenutnoPitanje.c && (
            <OptionCard
              label="C"
              text={trenutnoPitanje.c}
              checked={isCheckedC}
              onChange={() => setIsCheckedC((a) => !a)}
            />
          )}
          {trenutnoPitanje.d && (
            <OptionCard
              label="D"
              text={trenutnoPitanje.d}
              checked={isCheckedD}
              onChange={() => setIsCheckedD((a) => !a)}
            />
          )}
        </div>

        {/* NAVIGACIJA */}
        <div className="mt-10 flex gap-4">
          <NazadButton
            setIsCheckedA={setIsCheckedA}
            setIsCheckedB={setIsCheckedB}
            setIsCheckedC={setIsCheckedC}
            setIsCheckedD={setIsCheckedD}
            setI={setI}
            ukiniJedan={ukiniJedan}
            i={i}
          />
          <NextButton i={i} handleNext={handleNext} />
        </div>
      </main>
    </div>
  );
}

function isTrue(
  correctArr: string[],
  a: boolean,
  b: boolean,
  c: boolean,
  d: boolean,
) {
  const user = [a, b, c, d];
  const target = ["a", "b", "c", "d"].map((char) => correctArr.includes(char));
  return user.every((val, idx) => val === target[idx]);
}
function NextButton({ handleNext, i }: { i: number; handleNext: () => void }) {
  return (
    <button
      onClick={handleNext} // Uvijek ista funkcija, ona unutra zna šta treba
      className="flex-2 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg active:scale-95 transition-all"
    >
      <div className="w-full h-full flex items-center justify-center gap-2 py-4">
        {i >= pitanja.length ? "Završi test" : "Dalje"}
        <FaChevronRight size={14} className="flex-none" />
      </div>
    </button>
  );
}
function NazadButton({
  setIsCheckedA,
  setIsCheckedB,
  setIsCheckedC,
  setIsCheckedD,
  setI,
  ukiniJedan,
  i,
}: {
  setIsCheckedA: Function;
  setIsCheckedB: Function;
  setIsCheckedC: Function;
  setIsCheckedD: Function;
  setI: Function;
  ukiniJedan: Function;
  i: number;
}) {
  return (
    <button
      disabled={i <= 1}
      onClick={() => {
        setIsCheckedA(false);
        setIsCheckedB(false);
        setIsCheckedC(false);
        setIsCheckedD(false);
        setI(i - 1);
        ukiniJedan();
      }}
      className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-30 active:scale-95 transition-all"
    >
      <FaChevronLeft size={14} /> Nazad
    </button>
  );
}
function Kockice({ i }: { i: number }) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect ostaje skoro isti, ali TS će sada znati šta je activeItem
  useEffect(() => {
    const activeItem = itemsRef.current[i];
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [i]);
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div
        ref={scrollContainerRef} // Ref na kontejner
        className="flex overflow-x-auto py-6 px-6 no-scrollbar gap-3 items-center"
      >
        {pitanja.map((p) => (
          <div
            key={p.i}
            // TS-friendly način dodjele elementa u niz ref-ova
            ref={(el) => {
              itemsRef.current[p.i] = el;
            }}
            className={`flex-none w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all
      ${
        p.i === i
          ? "bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-200"
          : p.i < i
            ? "bg-emerald-100 text-emerald-600"
            : "bg-slate-100 text-slate-400"
      }`}
          >
            {p.i}
          </div>
        ))}
      </div>
    </div>
  );
}

function generateChoisesMade(a: boolean, b: boolean, c: boolean, d: boolean) {
  const lista = [a && "a", b && "b", c && "c", d && "d"].filter(
    Boolean,
  ) as string[];

  if (lista.length > 0) return lista;

  return undefined;
}
export default Test;

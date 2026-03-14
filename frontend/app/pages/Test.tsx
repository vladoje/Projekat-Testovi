import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Header from "~/components/Header";
import { Kockice } from "~/components/Kockice";
import Izaberi from "~/components/Izaberi";
import useTestData, { type pitanje } from "~/hooks/useTestData";
import useTest from "~/hooks/useTest";
import { useRjesenja } from "~/store";
import { useTestStore } from "~/testStore";
import Spinner from "~/components/Spinner";
import { useLocation } from "react-router";
import { useDarkMode } from "~/context/DarkModeContext";

function Test() {
  const location = useLocation();
  const cat = location.pathname.split("/").at(3) || "";
  const { isDarkMode } = useDarkMode();
  const { i, setI, answers, setAnswers, handleNext, handleSelect } = useTest();
  const { trenutnoPitanje, loading } = useTestData(i);
  const pitanja = useTestStore().pitanja;

  const ukiniJedan = useRjesenja().oduzmi;
  if (loading) return <Spinner />;
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"}`}
    >
      <Header />

      <Kockice
        i={i}
        setI={setI}
        handleSelect={handleSelect}
        trenutnoPitanje={trenutnoPitanje}
        pitanja={pitanja}
      />

      <main className="max-w-md mx-auto px-6 pb-8">
        {/* PITANJE */}
        <div className="mb-8">
          <span className="text-[12px] font-black uppercase tracking-[0.2em]">
            Pitanje {i} od {pitanja?.length}
          </span>
          <h1 className="text-xl font-bold  mt-2 leading-snug">
            {trenutnoPitanje?.question_text}
          </h1>
        </div>
        {(trenutnoPitanje?.type === "znak" ||
          trenutnoPitanje?.type === "raskrsnica") && (
          <div className="mb-8">
            <div
              className={` border-2 ${!isDarkMode ? "bg-surface" : "bg-surface-dark"}  rounded-3xl shadow-sm p-4 flex justify-center`}
            >
              <img
                src={`/pitanja-slike/${trenutnoPitanje.question_id}.webp`}
                alt="Slika pitanja"
                className="max-h-52 w-auto object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        )}
        <Izaberi
          trenutnoPitanje={trenutnoPitanje || ({} as pitanje)}
          answers={answers || []}
          setAnswers={setAnswers}
        />

        {/* NAVIGACIJA */}
        <div className="mt-10 flex gap-4">
          <NazadButton
            setAnswers={setAnswers}
            setI={setI}
            ukiniJedan={ukiniJedan}
            i={i}
          />
          <NextButton
            i={i}
            handleNext={() => handleNext(trenutnoPitanje!, pitanja.length, cat)}
            pitanja={pitanja}
          />
        </div>
      </main>
    </div>
  );
}

function NextButton({
  handleNext,
  i,
  pitanja,
}: {
  i: number;
  handleNext: () => void;
  pitanja: pitanje[];
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <button
      onClick={handleNext} // Uvijek ista funkcija, ona unutra zna šta treba
      className={`flex-2 rounded-2xl font-bold text-text-dark ${!isDarkMode ? "bg-primary hover:bg-primary/25" : "bg-primary-dark hover:bg-primary-dark/25"}   shadow-lg active:scale-95 transition-all`}
    >
      <div className="w-full h-full flex items-center justify-center gap-2 py-4">
        {i >= pitanja?.length ? "Završi test" : "Dalje"}
        <FaChevronRight size={14} className="flex-none" />
      </div>
    </button>
  );
}
function NazadButton({
  setAnswers,
  setI,
  ukiniJedan,
  i,
}: {
  setAnswers: Function;
  setI: Function;
  ukiniJedan: Function;
  i: number;
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <button
      disabled={i <= 1}
      onClick={() => {
        setAnswers("");
        setI(i - 1);
        ukiniJedan();
      }}
      className={`flex-1 ${!isDarkMode ? "bg-secondary/50" : "bg-secondary-dark/25"} text-text-dark flex items-center justify-center gap-2 py-4 rounded-2xl font-bold    disabled:opacity-30 active:scale-95 transition-all`}
    >
      <FaChevronLeft size={14} /> Nazad
    </button>
  );
}

export default Test;

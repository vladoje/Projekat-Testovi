import type { pitanje } from "~/hooks/useTestData";
import type { ChoisesState } from "~/store";
import Izaberi from "./Izaberi";
import { useDarkMode } from "~/context/DarkModeContext";

export function RjesenoPitanje({
  pitanje,
  idx,
  isCorrect,
  choises,
}: {
  pitanje: pitanje;
  idx: number;
  isCorrect: boolean;
  choises: ChoisesState[];
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <div key={idx} className="relative">
      {/* Indikator Tačno/Netačno pored pitanja */}
      <div
        className={`absolute -left-4 top-0 w-1 h-full rounded-full ${isCorrect ? "bg-emerald-600" : "bg-red-600"}`}
      />

      <div className="mb-4">
        <span
          className={`text-[12px] font-black uppercase ${isCorrect ? "text-emerald-500" : "text-red-600"}`}
        >
          Pitanje {idx + 1} — {isCorrect ? "Tačno" : "Netačno"}
        </span>
        <h4 className="text-lg font-bold  mt-1">{pitanje.question_text}</h4>
      </div>
      {(pitanje?.type === "znak" || pitanje?.type === "raskrsnica") && (
        <div className="mb-8">
          <div className="  rounded-3xl p-4 flex justify-center">
            <img
              src={`/pitanja-slike/${pitanje.question_id}.webp`}
              alt="Slika pitanja"
              className="max-h-52 w-auto object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      )}
      <div className="grid gap-3 opacity-80">
        <Izaberi
          trenutnoPitanje={pitanje}
          answers={choises[idx]?.checkedAnswers || [""]}
        />
      </div>

      {/* PRIKAZ TAČNOG ODGOVORA (ako je korisnik pogriješio) */}
      {!isCorrect && (
        <div className="mt-3 p-4  rounded-2xl">
          <p
            className={`text-s font-bold ${!isDarkMode ? "text-emerald-700 " : "text-emerald-500 "}`}
          >
            Tačan odgovor:{" "}
            <span className="uppercase">
              {pitanje.correct_answer.join(", ")}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

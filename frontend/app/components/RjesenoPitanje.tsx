import type { pitanje } from "~/hooks/useTestData";
import type { ChoisesState } from "~/store";
import Izaberi from "./Izaberi";

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
  return (
    <div key={idx} className="relative">
      {/* Indikator Tačno/Netačno pored pitanja */}
      <div
        className={`absolute -left-4 top-0 w-1 h-full rounded-full ${isCorrect ? "bg-emerald-500" : "bg-red-500"}`}
      />

      <div className="mb-4">
        <span
          className={`text-[10px] font-black uppercase ${isCorrect ? "text-emerald-500" : "text-red-500"}`}
        >
          Pitanje {idx + 1} — {isCorrect ? "Tačno" : "Netačno"}
        </span>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1">
          {pitanje.question_text}
        </h4>
      </div>
      {(pitanje?.type === "znak" || pitanje?.type === "raskrsnica") && (
        <div className="mb-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm p-4 flex justify-center">
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
        {/* <OptionCard
                    label="A"
                    text={pitanje.answer_1_text}
                    checked={
                      choises[idx]?.checkedAnswers?.includes("a") || false
                    }
                  />
                  <OptionCard
                    label="B"
                    text={pitanje.answer_2_text}
                    checked={
                      choises[idx]?.checkedAnswers?.includes("b") || false
                    }
                  />
                  {pitanje.answer_3_text && (
                    <OptionCard
                      label="C"
                      text={pitanje.answer_3_text}
                      checked={
                        choises[idx]?.checkedAnswers?.includes("c") || false
                      }
                    />
                  )}
                  {pitanje.answer_4_text && (
                    <OptionCard
                      label="D"
                      text={pitanje.answer_4_text}
                      checked={
                        choises[idx]?.checkedAnswers?.includes("d") || false
                      }
                    />
                  )}
                  {pitanje.answer_5_text && (
                    <OptionCard
                      label="E"
                      text={pitanje.answer_5_text}
                      checked={
                        choises[idx]?.checkedAnswers?.includes("e") || false
                      }
                    />
                  )} */}
      </div>

      {/* PRIKAZ TAČNOG ODGOVORA (ako je korisnik pogriješio) */}
      {!isCorrect && (
        <div className="mt-3 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 rounded-2xl">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
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

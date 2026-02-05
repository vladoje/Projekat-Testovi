import Header from "~/components/Header";
import { OptionCard } from "~/components/OptionCard";
import { pitanja } from "~/pitanja";
import { useRjesenja } from "~/store";
import { FaCircleCheck, FaCircleXmark, FaRotateLeft } from "react-icons/fa6";
import { Link } from "react-router";

function Results() {
  const rjesenja = useRjesenja().rjesenja;
  const choises = useRjesenja().choises;

  const brojBodeva = rjesenja.filter(Boolean).length;
  const procenat = Math.round((brojBodeva / pitanja.length) * 100);
  const polozio = procenat >= 90; // Granica za prolaz

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <Header />

      <main className="max-w-2xl mx-auto px-6 pt-10">
        {/* GLAVNI SCORE CARD */}
        <div
          className={`p-8 rounded-4xl text-center mb-10 shadow-2xl shadow-indigo-200 dark:shadow-none transition-colors ${
            polozio
              ? "bg-emerald-500 text-white"
              : "bg-white dark:bg-slate-900 border-2 border-red-100 dark:border-red-900/30"
          }`}
        >
          <div className="flex justify-center mb-4">
            {polozio ? (
              <FaCircleCheck className="text-6xl text-white animate-bounce" />
            ) : (
              <FaCircleXmark className="text-6xl text-red-500" />
            )}
          </div>
          <h2
            className={`text-sm font-black uppercase tracking-widest mb-2 ${polozio ? "text-emerald-100" : "text-slate-400"}`}
          >
            Vaš rezultat
          </h2>
          <h1 className="text-6xl font-black mb-2">
            {brojBodeva}
            <span className="text-2xl opacity-60">/{pitanja.length}</span>
          </h1>
          <p
            className={`text-lg font-bold ${polozio ? "text-white" : "text-red-500"}`}
          >
            {polozio ? "ČESTITAMO! POLOŽILI STE." : "NAŽALOST, NISTE POLOŽILI."}
          </p>

          <div className="mt-6 flex gap-3 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-black/10 hover:bg-black/20 rounded-xl font-bold transition-all flex items-center gap-2"
            >
              <FaRotateLeft />
              Vrati se na pocetak
            </Link>
          </div>
        </div>

        {/* DETALJAN PREGLED PITANJA */}
        <h3 className="text-xl font-black text-slate-800 dark:text-white mb-6">
          Pregled grešaka
        </h3>
        <div className="space-y-12">
          {pitanja.map((pitanje, idx) => {
            const isCorrect = rjesenja[idx];
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
                    {pitanje.q}
                  </h4>
                </div>

                <div className="grid gap-3 opacity-80">
                  <OptionCard
                    label="A"
                    text={pitanje.a}
                    checked={
                      choises[idx]?.checkedAnswers?.includes("a") || false
                    }
                  />
                  <OptionCard
                    label="B"
                    text={pitanje.b}
                    checked={
                      choises[idx]?.checkedAnswers?.includes("b") || false
                    }
                  />
                  {pitanje.c && (
                    <OptionCard
                      label="C"
                      text={pitanje.c}
                      checked={
                        choises[idx]?.checkedAnswers?.includes("c") || false
                      }
                    />
                  )}
                  {pitanje.d && (
                    <OptionCard
                      label="D"
                      text={pitanje.d}
                      checked={
                        choises[idx]?.checkedAnswers?.includes("d") || false
                      }
                    />
                  )}
                </div>

                {/* PRIKAZ TAČNOG ODGOVORA (ako je korisnik pogriješio) */}
                {!isCorrect && (
                  <div className="mt-3 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 rounded-2xl">
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Tačan odgovor:{" "}
                      <span className="uppercase">
                        {pitanje.correct.join(", ")}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Results;

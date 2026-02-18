import { Link, useLocation, useNavigate } from "react-router";
import Header from "~/components/Header";

import { categorije } from "~/data";

function SelectTest() {
  const location = useLocation();

  const category = location.pathname.split("/").at(2);
  const prvaPomoc = category === "P" ? "Prva pomoc" : null;

  const body = categorije.find((cat) =>
    cat.label === prvaPomoc ? prvaPomoc : `${category} kategorija`,
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-10">
      <Header />

      <main className="max-w-md mx-auto px-6 pt-8">
        {/* NASLOVNA SEKCIJA - Čisto i pregledno */}
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
            {category} Kategorija
          </span>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {prvaPomoc ? prvaPomoc : "Teorijski Ispit"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
            {body?.opis || "Spremite se za polaganje uz zvanična pitanja."}
          </p>
        </div>

        {/* KARTICE ZA IZBOR - Indigo/Slate estetika */}
        <div className="space-y-4">
          {/* SIMULACIJA */}
          <Link
            to={`/test/categorija/${prvaPomoc ? "P" : category}/test`}
            className="block p-5 bg-slate-900 dark:bg-indigo-600 rounded-2xl shadow-lg shadow-slate-200 dark:shadow-none active:scale-[0.97] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                ⏱️
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Simulacija ispita
                </h2>
                <p className="text-slate-400 dark:text-indigo-100 text-xs mt-1">
                  Vremensko ograničenje i pravi uslovi.
                </p>
              </div>
            </div>
          </Link>

          {/* UČENJE */}
          <Link
            to={`/test/categorija/${prvaPomoc ? "P" : category}/ucenje`}
            className="block p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-[0.97] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-2xl">
                📖
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                  Vježbaonica
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Uči bez pritiska uz objašnjenja.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* INFO BOX */}
      </main>
    </div>
  );
}

export default SelectTest;

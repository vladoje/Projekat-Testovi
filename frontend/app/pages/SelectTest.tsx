import { Link, useLocation, useNavigate } from "react-router";
import Header from "~/components/Header";
import { useDarkMode } from "~/context/DarkModeContext";

import { categorije } from "~/data";

function SelectTest() {
  const location = useLocation();

  const category = location.pathname.split("/").at(2);
  const prvaPomoc = category === "P" ? "Prva pomoc" : null;

  const body = categorije.find((cat) =>
    cat.label === prvaPomoc ? prvaPomoc : `${category} kategorija`,
  );
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} pb-10`}
    >
      <Header />

      <main className="max-w-md mx-auto px-6 pt-8">
        {/* NASLOVNA SEKCIJA - Čisto i pregledno */}
        <div className="mb-10 text-center">
          <span
            className={`inline-block px-3 py-1 ${!isDarkMode ? " bg-secondary border-border " : "bg-secondary-dark  border-border"} text-text-dark   text-xs font-bold rounded-full mb-3 uppercase tracking-widest`}
          >
            {category} Kategorija
          </span>
          <h1 className="text-3xl font-bold ">
            {prvaPomoc ? prvaPomoc : "Teorijski Ispit"}
          </h1>
          <p className=" mt-3 text-sm leading-relaxed">
            {body?.opis || "Spremite se za polaganje uz zvanična pitanja."}
          </p>
        </div>

        {/* KARTICE ZA IZBOR - Indigo/Slate estetika */}
        <div className="space-y-4">
          {/* SIMULACIJA */}
          <Link
            to={`/test/categorija/${prvaPomoc ? "P" : category}/test`}
            className={`block border-2 p-5 ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} text-text-dark  rounded-2xl shadow-lg  active:scale-[0.97] transition-all`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                ⏱️
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Simulacija ispita
                </h2>
                <p className=" text-xs mt-1">
                  Vremensko ograničenje i pravi uslovi.
                </p>
              </div>
            </div>
          </Link>

          {/* UČENJE */}
          <Link
            to={`/test/categorija/${prvaPomoc ? "P" : category}/ucenje`}
            className={`block p-5  border-2 rounded-2xl ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} hover:bg-slate-50 dark:hover:bg-slate-800/50 active:scale-[0.97] transition-all`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                📖
              </div>
              <div>
                <h2 className="text-lg font-bold text-text-dark">
                  Vježbaonica
                </h2>
                <p className="text-text-dark text-xs mt-1">
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

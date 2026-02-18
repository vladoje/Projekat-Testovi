import { Link, useLocation, useNavigate } from "react-router";
import Header from "~/components/Header";
import { lekcije } from "~/data";

function SelectLekcija() {
  const location = useLocation();

  const category = location.pathname.split("/").at(2) || "";
  const prvaPomoc = category === "P" ? "Prva pomoc" : null;

  const body = lekcije.find((cat) => {
    if (prvaPomoc) return cat.label === "Prva pomoc";
    return cat.label.startsWith(category);
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-10">
      <Header />

      <main className="max-w-md mx-auto px-6 pt-8">
        {/* NASLOVNA SEKCIJA */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {category === "S"
              ? "Suva pitanja"
              : category === "Z"
                ? "Znakovi"
                : category === "R"
                  ? "Raskrsnice"
                  : "Prva Pomoc"}
          </h1>
          <div className="mt-4 p-4 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
            <p className="text-slate-600 dark:text-slate-400 text-sm italic leading-relaxed">
              Odradite test od 20{" "}
              {category === "S"
                ? "cisto teoretskih pitanja"
                : category === "Z"
                  ? "pitanja vezanih za znakove"
                  : category === "R"
                    ? "pitanja vezanih za raskrsnice"
                    : "pitanja vezanih za Prvu pomoc"}{" "}
              izabranih algoritmom koji je pogodan za sto brze ucenje pitanja
            </p>
          </div>
        </div>

        {/* OPCIJE */}
        <div className="space-y-4">
          <Link
            to={`/test/lekcija/${prvaPomoc ? "P" : category}/test`}
            className="block p-5 bg-slate-900 dark:bg-indigo-600 rounded-3xl shadow-lg active:scale-[0.97] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                ⏱️
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Ispitni mod</h2>
                <p className="text-slate-400 dark:text-indigo-100 text-xs mt-0.5">
                  Izmjeri svoje znanje pod pritiskom.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to={`/test/lekcija/${prvaPomoc ? "P" : category}/ucenje`}
            className="block p-5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl active:scale-[0.97] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl">
                📖
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                  Slobodno učenje
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                  Pređi sva pitanja, jedno po jedno.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SelectLekcija;

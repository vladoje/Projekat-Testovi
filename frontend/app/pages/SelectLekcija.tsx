import { Link, useLocation } from "react-router";
import Header from "~/components/Header";
import { lekcije } from "~/data";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6"; // Instaliraj react-icons ako nemaš

function SelectLekcija() {
  const location = useLocation();
  const category = location.pathname.split("/").at(2) || "";
  const prvaPomoc = category === "P" ? "Prva pomoc" : null;
  const [b, setB] = useState("A");

  const body = lekcije.find((cat) => {
    if (prvaPomoc) return cat.label === "Prva pomoc";
    return cat.label.startsWith(category);
  });

  const testText = body?.testText(category, b);

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
              "{testText}"
            </p>
          </div>
        </div>

        {/* SELECT KATEGORIJE - Samo za Suva pitanja */}
        {category === "S" && (
          <div className="mb-6">
            <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 mb-2">
              Odaberi kategoriju
            </label>
            <div className="relative group">
              <select
                onChange={(e) => setB(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 py-3.5 px-5 pr-12 rounded-2xl font-bold focus:outline-none focus:border-indigo-500 transition-all cursor-pointer shadow-sm"
              >
                <option value="A">A kategorija (Moto)</option>
                <option value="B">B kategorija (Auto)</option>
                <option value="C">C kategorija (Kamion)</option>
                <option value="D">D kategorija (Autobus)</option>
              </select>
              {/* Prilagođena strelica jer smo sakrili defaultnu sa appearance-none */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <FaChevronDown size={14} />
              </div>
            </div>
          </div>
        )}

        {/* PAMETNI MOD */}
        <div className="flex items-center justify-between p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-xl">
              🧠
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                Pametno učenje
              </span>
              <span className="text-[11px] text-slate-400">
                Fokus na tvoje najčešće greške
              </span>
            </div>
          </div>
          <Switch size="small" color="primary" />
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

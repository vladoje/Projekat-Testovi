import { FaCircleCheck, FaCircleXmark, FaRotateLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { getBodova } from "~/helpers";

export function Polozio({
  rjesenja,
  duz,
}: {
  rjesenja: boolean[];
  duz: number;
}) {
  const location = useLocation();
  const cat = location.pathname.split("/").at(2) || "";

  let [brojBodeva, maxBodova] = getBodova(rjesenja, cat, duz);

  const procenat = Math.round((brojBodeva / maxBodova) * 100);
  const polozio = procenat >= 90; // Granica za prolaz
  return (
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
        <span className="text-2xl opacity-60">/{maxBodova}</span>
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
  );
}

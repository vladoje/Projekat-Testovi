import { FaCircleCheck, FaCircleXmark, FaRotateLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { useDarkMode } from "~/context/DarkModeContext";
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
  const { isDarkMode } = useDarkMode();
  let [brojBodeva, maxBodova] = getBodova(rjesenja, cat, duz);

  const procenat = Math.round((brojBodeva / maxBodova) * 100);
  const polozio = procenat >= 90; // Granica za prolaz
  return (
    <div
      className={`p-8 rounded-4xl text-center mb-8  transition-colors ${
        polozio
          ? "bg-emerald-500 "
          : `border-2 ${!isDarkMode ? "bg-secondary border-border" : "bg-secondary-dark border-border-dark"}`
      }`}
    >
      <div className="flex justify-center mb-4">
        {polozio ? (
          <FaCircleCheck className="text-6xl  animate-bounce" />
        ) : (
          <FaCircleXmark
            className={`text-6xl ${!isDarkMode ? "text-primary" : "text-background-dark"}`}
          />
        )}
      </div>
      <h2
        className={`text-sm font-black uppercase tracking-widest mb-2 ${!isDarkMode ? "text-text" : "text-text-dark"}`}
      >
        Vaš rezultat
      </h2>
      <h1 className="text-6xl font-black mb-2">
        {brojBodeva}
        <span className="text-2xl opacity-60">/{maxBodova}</span>
      </h1>
      <p className={`text-lg font-bold `}>
        {polozio ? "ČESTITAMO! POLOŽILI STE." : "NAŽALOST, NISTE POLOŽILI."}
      </p>

      <div className="mt-6 flex gap-3 justify-center">
        <Link
          to="/"
          className={`px-6 py-3 ${!isDarkMode ? "bg-primary hover:bg-primary/50" : "bg-primary-dark hover:bg-primary-dark/25"} text-text-dark rounded-xl font-bold transition-all flex items-center gap-2`}
        >
          <FaRotateLeft />
          Vrati se na pocetak
        </Link>
      </div>
    </div>
  );
}

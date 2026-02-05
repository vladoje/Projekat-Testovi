import { Link } from "react-router";
import Header from "./Header";
import { FaTriangleExclamation, FaHouse } from "react-icons/fa6";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      <main className="max-w-md mx-auto px-6 py-24 text-center">
        {/* Ikona i veliki natpis */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 animate-pulse">
            <FaTriangleExclamation size={48} />
          </div>
        </div>

        <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-4">
          Ups! Nešto je pošlo po zlu.
        </h1>

        <div className="space-y-4 mb-10">
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Došlo je do neočekivane greške. Pokušajte ponovo ili se vratite na
            početnu stranicu.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 italic bg-slate-100 dark:bg-slate-900/50 py-3 px-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            Greška je automatski prijavljena našem timu i biće sanirana u
            najkraćem mogućem roku.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none active:scale-95  transition-colors"
        >
          <FaHouse size={18} />
          Nazad na početak
        </Link>
      </main>
    </div>
  );
}

export default NotFound;

import { Link } from "react-router"; // Uvezen Link
import Header from "~/components/Header";
import { FaUser, FaEnvelope, FaIdCard, FaShieldHalved } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useEffect } from "react";
import { useRjesenja } from "~/store";

function UserProfile() {
  const resetState = useRjesenja().resetState;
  useEffect(() => resetState(), []);
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-10">
      <Header />

      <main className="max-w-md mx-auto px-6 pt-10">
        {/* AVATAR SEKCIJA */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-indigo-200 dark:shadow-none mb-4">
            V
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Vladimir
          </h1>
          <p className="text-slate-400 text-sm italic">Kandidat za vozača</p>
        </div>

        {/* FORMA ZA PODATKE */}
        <div className="space-y-4">
          {/* KORISNIČKO IME */}
          <div className="group">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 group-focus-within:text-indigo-500 transition-colors">
              <FaUser size={10} /> Korisničko ime
            </label>
            <input
              type="text"
              defaultValue="Vladimir"
              className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3.5 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>

          {/* E-MAIL */}
          <div className="group">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 group-focus-within:text-indigo-500 transition-colors">
              <FaEnvelope size={10} /> E-mail adresa
            </label>
            <input
              type="email"
              defaultValue="vladimir487@gmail.com"
              className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3.5 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>

          {/* KATEGORIJA */}
          <div className="group">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 group-focus-within:text-indigo-500 transition-colors">
              <FaIdCard size={10} /> Kategorija koju polažete
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="B"
                maxLength={1}
                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3.5 font-bold text-indigo-600 dark:text-indigo-400 focus:outline-none focus:border-indigo-500 transition-all shadow-sm uppercase text-center text-xl"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] text-slate-300 font-bold uppercase">
                Promijeni
              </span>
            </div>
          </div>

          {/* DUGME ZA SPAŠAVANJE */}
          <button className="w-full mt-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.97] flex items-center justify-center gap-3 shadow-lg cursor-pointer">
            <FaSave /> Sačuvaj izmjene
          </button>
        </div>

        {/* DONJA SEKCIJA - ODJAVA I PRIVATNOST */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="text-red-400 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer">
            Odjavi se sa profila
          </button>

          <Link
            to="/privacy-policy"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-500 text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            <FaShieldHalved size={12} /> Politika Privatnosti
          </Link>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;

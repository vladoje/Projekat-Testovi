import { FaCartShopping, FaCheck } from "react-icons/fa6";
import Header from "~/components/Header";
import { useMe } from "~/helpers/useMe";

function Shop() {
  useMe();
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-10">
      <Header />

      <main className="max-w-md mx-auto px-6 pt-10">
        {/* UVODNA SEKCIJA */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 text-3xl">
            🙌
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Podrži projekat
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">
            Hvala što koristiš našu aplikaciju. Tvoja podrška nam pomaže da
            održimo servere i dodajemo nova pitanja svakog mjeseca.
          </p>
        </div>

        {/* GLAVNA PONUDA - PREMIUM KARTICA */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl border-2 border-indigo-500 shadow-2xl shadow-indigo-100 dark:shadow-none p-8">
          {/* Badge za popularnost */}
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
            Najbolja ponuda
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-500 rounded-2xl text-white shadow-lg shadow-indigo-200">
              <FaCartShopping size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                PRO Verzija
              </h2>
              <p className="text-slate-400 text-xs uppercase tracking-tighter">
                Jednokratno plaćanje
              </p>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <FaCheck className="text-green-500 flex-none" />
              <span>Trajno uklanjanje svih reklama</span>
            </li>
          </ul>

          <button className="w-full bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-[0.97] flex items-center justify-center gap-3 shadow-lg">
            Kupi sada — 0.99€
          </button>

          <p className="text-[10px] text-center text-slate-400 mt-4 px-2">
            Klikom na dugme podržavate dalji razvoj aplikacije. Hvala!
          </p>
        </div>

        {/* SEKUNDARNA OPCIJA (Opciono ako budeš imao) */}
        <div className="mt-8 px-6 py-5 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Imate problema sa kupovinom? <br />
            <span className="font-bold text-indigo-500 cursor-pointer">
              Kontaktirajte podršku
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Shop;

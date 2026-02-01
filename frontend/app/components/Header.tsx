import { Link } from "react-router";
import { FaAppleWhole, FaCartShopping, FaMoon } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoSunny } from "react-icons/io5";

function Header() {
  const darkMode = true; // Kasnije ćeš ovo vezati na state

  return (
    // "sticky" drži header na vrhu dok skroluješ, "backdrop-blur" pravi onaj Apple-ov efekat stakla
    <header className="sticky top-0 z-50 w-full px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SEKCIJA */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <div className="p-2 bg-red-500 rounded-xl shadow-lg shadow-red-200 dark:shadow-none">
            <FaAppleWhole className="text-white text-2xl group-hover:rotate-12 transition-transform" />
          </div>
          <span className="font-black text-xl tracking-tight text-slate-800 dark:text-white uppercase">
            Driver<span className="text-red-500">App</span>
          </span>
        </Link>

        {/* DESNA SEKCIJA - NAVIGACIJA I ALATI */}
        <div className="flex items-center gap-3 pl-4">
          <Link
            to="/shop"
            className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative"
          >
            <FaCartShopping className="text-xl" />
            {/* Mala crvena tačkica kao notifikacija za korpu */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </Link>

          <Link
            to="/profile"
            className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <CgProfile className="text-2xl" />
          </Link>

          <button className="p-2.5 cursor-pointer text-amber-500 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:rotate-45">
            {darkMode ? (
              <FaMoon className="text-xl" />
            ) : (
              <IoSunny className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { Link } from "react-router";
import { useDarkMode } from "~/context/DarkModeContext";
import useMounted from "~/hooks/useMounted";
import Spinner from "./Spinner";

function CheckEmail() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const mounted = useMounted();
  if (!mounted) return <Spinner />;
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} px-4`}
    >
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2.5 cursor-pointer  -400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:rotate-45"
      >
        {isDarkMode ? (
          <FaMoon className="text-xl" />
        ) : (
          <IoSunny className="text-xl" />
        )}
      </button>
      <div
        className={`w-full max-w-md rounded-lg  p-8 shadow-md text-center border-2 ${!isDarkMode ? "bg-secondary " : "bg-secondary-dark"}`}
      >
        <h2 className="text-2xl font-semibold ">Provjeri svoj email</h2>

        <p className="mt-4 text-sm ">
          Ako nalog sa unesenom email adresom postoji, poslali smo vam email sa
          linkom za promjenu lozinke. Provjeri inbox i spam folder.
        </p>

        <Link
          to="/login"
          className={`mt-6 inline-block w-full rounded-md ${!isDarkMode ? " bg-primary border-border hover:bg-surface" : "hover:bg-surface-dark bg-primary-dark  border-border"}  text-text-dark px-4 py-2 text-sm font-medium  transition `}
        >
          Nazad na prijavu
        </Link>
      </div>
    </div>
  );
}

export default CheckEmail;

import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router";

import { useState } from "react";
import toast from "react-hot-toast";
import { isValidEmail } from "~/hooks/useRegister";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useDarkMode } from "~/context/DarkModeContext";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  async function handleClick() {
    if (!isValidEmail(email)) {
      toast.error("Email nije validan");
      return;
    }
    try {
      setLoading(true);
      const loginRes = await fetch(
        "https://projekat-testovi.onrender.com/auth/forgot-password",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      if (!loginRes.ok) {
        toast.error("Došlo je do greške prilikom mijenjanja vaše šifre");
        return;
      }

      navigate("/check-email");
    } catch (err) {
      toast.error("Greška na serveru");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-background-dark text-text-dark border-border-dark" : "border-border bg-background text-text"} flex flex-col justify-start px-6 pb-12`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
        {/* HEADER */}
        <div className="flex items-center justify-between my-10 ">
          <div
            className={`border-2 rounded-[40px] p-2 pt-2.5 pr-4 px-3 ${isDarkMode ? "bg-primary-dark  " : " bg-primary text-text-dark "}`}
          >
            <Link
              to="/login"
              className={`underline decoration-2 inline-flex items-center gap-2 text-sm font-bold ${
                isDarkMode
                  ? "hover:text-secondary-dark"
                  : "hover:text-secondary"
              } transition-colors`}
            >
              <GoArrowLeft className="w-5 h-5" />
              Nazad na login
            </Link>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2.5 cursor-pointer text-amber-500 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:rotate-45"
          >
            {isDarkMode ? (
              <FaMoon className="text-xl" />
            ) : (
              <IoSunny className="text-xl" />
            )}
          </button>
        </div>

        {/* NASLOV */}
        <h2 className="text-3xl font-black tracking-tighter leading-tight">
          Zaboravljena lozinka?
        </h2>

        <p className="mt-2 text-sm font-medium italic">
          Unesite vaš e-mail da biste napravili novu lozinku
        </p>
      </div>

      <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className={` ${isDarkMode ? "border-border-dark bg-secondary-dark " : "border-border bg-secondary "} py-8 px-8 border-2 rounded-[40px]  space-y-6 ${
            loading ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          <div>
            <label className="block text-[10px] font-bold  uppercase tracking-[2px] ml-1 mb-2">
              E-mail adresa
            </label>
            <input
              className={`w-full text-base font-medium  border-2 ${isDarkMode ? "text-text-dark bg-surface-dark border-border-dark" : "border-border text-text bg-surface "} rounded-2xl py-3.5 px-5  outline-none transition-all placeholder:text-gray-300`}
              type="email"
              value={email || ""}
              onChange={(e) => {
                setEmail?.(e.target.value);
              }}
            />
          </div>

          <button
            onClick={handleClick}
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 py-4 px-4 border-2 rounded-2xl  text-sm font-black ${isDarkMode ? " border-border-dark bg-primary-dark hover:bg-secondary-dark" : "border-border bg-primary text-text-dark hover:bg-secondary"} transition-all active:scale-[0.98] disabled:opacity-50`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Slanje..." : "Pošalji link za novu lozinku"}
          </button>
        </div>

        <p className="mt-8 text-center text-sm -500 font-medium">
          Sjećate se lozinke?{" "}
          <Link
            to="/login"
            className={`underline decoration-2 font-black ${isDarkMode ? " text-secondary-dark hover:text-border-dark " : " text-secondary hover:text-border "}transition-colors`}
          >
            Ulogujte se
          </Link>
        </p>
      </div>
    </div>
  );
}

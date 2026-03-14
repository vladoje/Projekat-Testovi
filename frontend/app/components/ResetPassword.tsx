import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";
import { InputDark } from "./Input";
import toast from "react-hot-toast";
import { isValidPassword } from "~/hooks/useRegister";
import { useDarkMode } from "~/context/DarkModeContext";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!token) {
      toast.error("Nevažeći ili istekao link");
      return;
    }

    if (pass1 !== pass2) {
      toast.error("Šifre nisu iste");
      return;
    }

    if (!isValidPassword(pass1)) {
      toast.error("Šifra mora imati minimalno 8 karaktera");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://projekat-testovi.onrender.com/auth/reset-password",
        {
          method: "PATCH",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newPassword: pass1,
            token,
          }),
        },
      );

      if (!res.ok) {
        toast.error("Došlo je do greške prilikom mijenjanja lozinke");
        return;
      }

      toast.success("Lozinka je uspješno promijenjena");
      navigate("/login");
    } catch (err) {
      toast.error("Greška na serveru");
    } finally {
      setLoading(false);
    }
  }
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} px-4`}
    >
      <div
        className={`border-2 rounded-[40px] p-2 pt-2.5 pr-4 px-3 ${isDarkMode ? "bg-primary-dark  " : " bg-primary text-text-dark "}`}
      >
        <Link
          to="/login"
          className={`underline decoration-2 inline-flex items-center gap-2 text-sm font-bold ${
            isDarkMode ? "hover:text-secondary-dark" : "hover:text-secondary"
          } transition-colors`}
        >
          <GoArrowLeft className="w-5 h-5" />
          Nazad na login
        </Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="absolute top-6 right-6 p-2.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:rotate-45"
      >
        {isDarkMode ? (
          <FaMoon className="text-xl" />
        ) : (
          <IoSunny className="text-xl" />
        )}
      </button>
      <div className="w-full max-w-md rounded-lg  p-8 shadow-md">
        <h2 className="text-2xl font-semibold  text-center">Nova lozinka</h2>

        <p className="mt-3 text-sm  text-center">
          Unesite novu lozinku za svoj nalog.
        </p>

        <div className="mt-6">
          <label className="block text-xs font-bold  uppercase tracking-widest ml-1 mb-2">
            Lozinka
          </label>
          <InputDark
            isDarkMode={isDarkMode}
            type="password"
            state={pass1}
            setState={setPass1}
          />
        </div>

        <div className="mt-4">
          <label className="block text-xs font-bold  uppercase tracking-widest ml-1 mb-2">
            Ponovite lozinku
          </label>
          <InputDark
            isDarkMode={isDarkMode}
            type="password"
            state={pass2}
            setState={setPass2}
          />
        </div>

        <button
          onClick={handleClick}
          disabled={loading}
          className={`mt-6 w-full ${!isDarkMode ? "bg-primary hover:bg-primary/25" : "bg-primary hover:bg-primary-dark/50"} rounded-md  px-4 py-2 text-sm font-medium text-text-dark transition  disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? "Sačekajte..." : "Promijeni lozinku"}
        </button>

        <Link
          to="/login"
          className="mt-4 block text-center text-sm  hover:underline"
        >
          Nazad na prijavu
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;

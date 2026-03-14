import { Link } from "react-router";
import Input, { InputDark } from "./Input";
import { useLogin } from "~/hooks/useLogin";
import { MdErrorOutline } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useDarkMode } from "~/context/DarkModeContext";
import useMounted from "~/hooks/useMounted";
import Spinner from "./Spinner";
export default function Login() {
  const { email, setEmail, password, setPassword, err, handleClick } =
    useLogin();
  function handleGoogleLogin() {
    window.location.href = "https://projekat-testovi.onrender.com/auth/google";
  }
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const mounted = useMounted();
  if (!mounted) return <Spinner />;
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} relative `}
    >
      {/* Dark mode dugme */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2.5 cursor-pointer   hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:rotate-45"
      >
        {isDarkMode ? (
          <FaMoon className="text-xl" />
        ) : (
          <IoSunny className="text-xl" />
        )}
      </button>

      <div className="flex flex-col justify-center px-6 pb-12 pt-16 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-3xl font-extrabold  text-center tracking-tight">
            Dobrodošli nazad
          </h2>

          <p className="mt-2 text-center text-sm italic">
            Ulogujte se na vaš nalog
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className={`${!isDarkMode ? "bg-secondary" : "bg-secondary-dark"} py-10 px-8 shadow-lg rounded-3xl border-2  space-y-6`}
          >
            <div>
              <InputDark
                label="E-mail"
                state={email}
                setState={setEmail}
                type="email"
                isDarkMode={isDarkMode}
              />
            </div>
            <div>
              <InputDark
                label="Lozinka"
                state={password}
                setState={setPassword}
                type="password"
                isDarkMode={isDarkMode}
              />
            </div>

            {err && (
              <div className="flex items-center gap-1.5 text-red-600 text-sm font-medium mt-1 ml-1">
                <MdErrorOutline />
                <span>{err}</span>
              </div>
            )}

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center text-sm  font-medium">
                <input
                  type="checkbox"
                  className="h-4 w-4  focus:ring-indigo-500  rounded"
                />
                <span className="ml-2">Zapamti me</span>
              </label>
              <Link
                to="/forgot-password"
                className={`text-sm underline decoration-2 font-bold ${!isDarkMode ? " text-secondary-dark hover:text-border-dark " : " text-secondary hover:text-border "}`}
              >
                Zaboravili ste šifru?
              </Link>
            </div>

            <button
              onClick={handleClick}
              className={`w-full py-4 rounded-2xl border-2 ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} text-text-dark font-bold shadow-md transition-transform active:scale-95`}
            >
              Uloguj se
            </button>
            <button
              onClick={handleGoogleLogin}
              className={`w-full py-4 mt-4 rounded-2xl border-2   text-text-dark ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} font-bold shadow-md flex items-center justify-center space-x-2 transition-transform active:scale-95`}
            >
              <img
                src="/google-logo.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span>Login with Google</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm ">
            Još nemate nalog?{" "}
            <Link
              to="/register"
              className={`font-bold underline decoration-2 ${!isDarkMode ? " text-secondary-dark hover:text-border-dark " : " text-secondary hover:text-border "} `}
            >
              Napravite nalog
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

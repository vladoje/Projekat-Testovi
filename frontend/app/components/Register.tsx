import { Link } from "react-router";
import Input, { InputDark } from "./Input";
import { useRegister } from "~/hooks/useRegister";
import { CheckPolicy, SelectCategory } from "./RegisterHelpers";
import { useDarkMode } from "~/context/DarkModeContext";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import useMounted from "~/hooks/useMounted";
import Spinner from "./Spinner";

// Fiksni redoslijed kategorija

export default function Register() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    categories,
    checked,
    setChecked,
    toggleCategory,
    handleClick,
  } = useRegister();
  const user = {
    id: 0,
    username: "",
    email: "",
    category: "B",
    rijesio_testova: 0,
  };
  function handleGoogleLogin() {
    window.location.href = "https://projekat-testovi.onrender.com/auth/google";
  }
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const mounted = useMounted();
  if (!mounted) return <Spinner />;
  return (
    <div
      className={`min-h-screen ${
        !isDarkMode
          ? "bg-background text-text border-border"
          : "bg-background-dark text-text-dark border-border-dark"
      } flex flex-col justify-center px-6 py-12 relative`}
    >
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
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center pt-8">
        <h2 className="text-3xl font-extrabold  tracking-tight">
          Napravite nalog
        </h2>
        <p className="mt-2 text-sm  italic">
          Registrujte se da biste nastavili
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className={` py-8 ${!isDarkMode ? "bg-secondary border-border" : "bg-secondary-dark border-border-dark"} px-8 shadow-lg rounded-3xl border-2  space-y-5`}
        >
          {/* Name */}
          <div>
            <InputDark
              isDarkMode={isDarkMode}
              label=" Puno ime "
              state={name}
              setState={setName}
            />
          </div>
          {/* Email */}
          <div>
            <InputDark
              isDarkMode={isDarkMode}
              label="E-mail"
              type="email"
              state={email}
              setState={setEmail}
            />
          </div>
          {/* Password */}
          <div>
            <InputDark
              isDarkMode={isDarkMode}
              label="Lozinka"
              type="password"
              state={password}
              setState={setPassword}
            />
          </div>
          <div>
            <InputDark
              isDarkMode={isDarkMode}
              label="Ponovite lozinku"
              type="password"
              state={password2}
              setState={setPassword2}
            />
          </div>
          {/* Categories */}
          <SelectCategory
            categories={categories}
            toggleCategory={toggleCategory}
            user={user}
          />

          {/* Terms */}
          <CheckPolicy checked={checked} setChecked={setChecked} />
          <button
            onClick={handleClick}
            className={`w-full flex justify-center py-4 px-4  border-2 rounded-2xl shadow-md text-text-dark ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} font-black  transition-all active:scale-95`}
          >
            Napravite nalog
          </button>
          <button
            onClick={handleGoogleLogin}
            className={`w-full py-4 mt-4 rounded-2xl border-2  text-text-dark ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} font-bold shadow-md flex items-center justify-center space-x-2 transition-transform active:scale-95`}
          >
            <img src="/google-logo.svg" alt="Google logo" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm ">
          Već imate nalog?{" "}
          <Link
            to="/login"
            className="font-black underline decoration-2  hover:text-indigo-500"
          >
            Ulogujte se
          </Link>
        </p>
      </div>
    </div>
  );
}

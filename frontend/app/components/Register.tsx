import { Link } from "react-router";
import Input from "./Input";
import { useRegister } from "~/hooks/useRegister";
import { CheckPolicy, SelectCategory } from "./RegisterHelpers";

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
  function handleGoogleLogin() {
    window.location.href = "https://projekat-testovi.onrender.com/auth/google";
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Napravite nalog
        </h2>
        <p className="mt-2 text-sm text-gray-500 italic">
          Registrujte se da biste nastavili
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-8 shadow-lg rounded-3xl border border-gray-200 space-y-5">
          {/* Name */}
          <div>
            <Input label=" Puno ime " state={name} setState={setName} />
          </div>
          {/* Email */}
          <div>
            <Input
              label="E-mail"
              type="email"
              state={email}
              setState={setEmail}
            />
          </div>
          {/* Password */}
          <div>
            <Input
              label="Lozinka"
              type="password"
              state={password}
              setState={setPassword}
            />
          </div>
          <div>
            <Input
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
          />

          {/* Terms */}
          <CheckPolicy checked={checked} setChecked={setChecked} />
          <button
            onClick={handleClick}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-md text-white font-black bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Napravite nalog
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 mt-4 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 font-bold shadow-md flex items-center justify-center space-x-2 transition-transform active:scale-95"
          >
            <img src="/google-logo.svg" alt="Google logo" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Već imate nalog?
          <Link
            to="/login"
            className="font-black text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Ulogujte se
          </Link>
        </p>
      </div>
    </div>
  );
}

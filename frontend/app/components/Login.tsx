import { Link, useNavigate } from "react-router";
import Input from "./Input";
import { useState } from "react";
import { useUser } from "~/userStore";
import toast from "react-hot-toast";
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password: string) {
  return password.length >= 8; // minimalno 8 znakova
}
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState("");

  async function handleClick() {
    setErr("");
    if (!isValidEmail(email)) {
      toast.error("Email nije validan");
      setErr("Email nije validan");
      return;
    }
    if (!isValidPassword(password)) {
      toast.error("Sifra mora sadrzati minimalno 8 karaktera");
      setErr("Sifra mora sadrzati minimalno 8 karaktera");
      return;
    }
    const loginRes = await fetch(
      "https://projekat-testovi.onrender.com/auth/login",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!loginRes.ok) {
      setErr("Email ili lozinka ne odgovaraju");
      toast.error("Email ili lozinka nisu tačni!");
      return;
    }

    const meRes = await fetch("https://projekat-testovi.onrender.com/user/me", {
      credentials: "include",
    });

    const user = await meRes.json();
    useUser.getState().setUser(user);
    toast.success("Uspješno ste se ulogovali!");
    navigate("/");
  }
  function handleGoogleLogin() {
    window.location.href = "https://projekat-testovi.onrender.com/auth/google";
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight">
          Dobrodošli nazad
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500 italic">
          Ulogujte se na vaš nalog
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-8 shadow-lg rounded-3xl border border-gray-200 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1 mb-2">
              E-mail
            </label>
            <Input
              state={email}
              setState={setEmail}
              type="email"
              placeholder="someone@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1 mb-2">
              Lozinka
            </label>
            <Input
              state={password}
              setState={setPassword}
              type="password"
              placeholder="●●●●●●●●"
            />
          </div>

          {err && (
            <div className="flex items-center text-red-600 text-sm font-medium mt-1 ml-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {err}
            </div>
          )}

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center text-sm text-gray-500 font-medium">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">Zapamti me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-bold text-indigo-600 hover:text-indigo-500"
            >
              Zaboravili ste šifru?
            </Link>
          </div>

          <button
            onClick={handleClick}
            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md transition-transform active:scale-95"
          >
            Uloguj se
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 mt-4 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 font-bold shadow-md flex items-center justify-center space-x-2 transition-transform active:scale-95"
          >
            <img src="/google-logo.svg" alt="Google logo" className="w-5 h-5" />
            <span>Login with Google</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Još nemate nalog?{" "}
          <Link
            to="/register"
            className="font-bold text-indigo-600 hover:text-indigo-500"
          >
            Napravite nalog
          </Link>
        </p>
      </div>
    </div>
  );
}

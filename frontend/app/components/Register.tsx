import { Link, useNavigate } from "react-router";
import Input from "./Input";
import { useState } from "react";
import { useUser } from "~/userStore";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [category, setCategory] = useState<string>("B");
  async function handleClick() {
    if (password !== password2) return;
    const loginRes = await fetch("http://127.0.0.1:5000/auth/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username: name, category }),
    });

    if (!loginRes.ok) {
      // handle error
      return;
    }

    // 👇 sada pitamo backend: ko sam ja?
    const meRes = await fetch("http://127.0.0.1:5000/user/me", {
      credentials: "include",
    });

    const user = await meRes.json();

    useUser.getState().setUser(user); // AuthContext
    navigate("/");
  }
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-black text-gray-900 tracking-tighter">
          Napravite nalog
        </h2>
        <p className="mt-2 text-sm text-gray-500 font-medium italic">
          Registrujte se da biste nastavili
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-8 shadow-xl shadow-indigo-100/50 rounded-[40px] border border-gray-100 space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              Puno ime
            </label>
            <Input state={name} setState={setName} />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              E-mail
            </label>
            <Input type="email" state={email} setState={setEmail} />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              Lozinka
            </label>
            <Input type="password" state={password} setState={setPassword} />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              Ponovite lozinku
            </label>
            <Input type="password" state={password2} setState={setPassword2} />
          </div>

          <div className="flex items-start px-1 py-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <p className="ml-2 text-xs text-gray-500 leading-relaxed">
              Prihvatam{" "}
              <Link
                to="/privacy-policy/bez"
                className="text-indigo-600 font-bold underline"
              >
                Politiku Privatnosti
              </Link>{" "}
              i uslove korišćenja.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Napravite nalog
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Već imate nalog?{" "}
          <Link
            to="/login"
            className="font-black text-indigo-600 hover:text-indigo-500"
          >
            Ulogujte se
          </Link>
        </p>
      </div>
    </div>
  );
}

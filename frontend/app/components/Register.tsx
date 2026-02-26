import { Link, useNavigate } from "react-router";
import Input from "./Input";
import { useState } from "react";
import { useUser } from "~/userStore";
import toast from "react-hot-toast";

export function isValidEmail(email: string) {
  if (email.length > 100) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPassword(password: string) {
  return password.length >= 8 && password.length <= 100;
}

// Fiksni redoslijed kategorija
const CATEGORY_ORDER = ["A", "B", "C", "D", "T"] as const;

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState("");

  const toggleCategory = (cat: string) => {
    setCategories((prev) => {
      let updated: string[];
      if (prev.includes(cat)) {
        updated = prev.filter((c) => c !== cat);
      } else {
        updated = [...prev, cat];
      }
      // sortiramo po CATEGORY_ORDER
      return CATEGORY_ORDER.filter((c) => updated.includes(c));
    });
  };

  async function handleClick() {
    setErr("");
    if (!checked) {
      toast.error(
        "Molimo vas procitajte i pristanite na nasu politiku privatnosti",
      );
      setErr("Molimo vas procitajte i pristanite na nasu politiku privatnosti");
      return;
    }
    if (!categories.length) {
      toast.error("Odaberite kategoriju koju palazete");
      setErr("Odaberite kategoriju koju palazete");
      return;
    }
    if (password !== password2) {
      toast.error("Šifre nisu iste");
      setErr("Šifre nisu iste");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Email nije validan");
      setErr("Email nije validan");
      return;
    }
    if (!isValidPassword(password)) {
      toast.error("Šifra mora imati minimalno 8 karaktera");
      setErr("Šifra mora imati minimalno 8 karaktera");
      return;
    }

    const loginRes = await fetch(
      "https://projekat-testovi.onrender.com/auth/register",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          username: name.slice(0, 100),
          category: categories.join(","),
        }),
      },
    );

    if (!loginRes.ok) {
      toast.error("Došlo je do greške prilikom registracije");
      return;
    }

    const meRes = await fetch("https://projekat-testovi.onrender.com/user/me", {
      credentials: "include",
    });
    const user = await meRes.json();
    useUser.getState().setUser(user);
    toast.success("Uspješno ste se registrovali!");
    navigate("/");
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
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              Puno ime
            </label>
            <Input state={name} setState={setName} />
          </div>
          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              E-mail
            </label>
            <Input type="email" state={email} setState={setEmail} />
          </div>
          {/* Password */}
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
          {/* Categories */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
              Izaberite kategorije koje polažete
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_ORDER.map((cat) => {
                const selected = categories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-1 rounded-full border ${
                      selected
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-100 text-gray-700 border-gray-300"
                    } hover:scale-105 transition-transform`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            {categories.length > 0 && (
              <p className="mt-2 text-sm text-gray-500">
                Odabrane: {categories.join(", ")}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start px-1 py-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              checked={checked}
              onChange={() => setChecked((a) => !a)}
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
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-md text-white font-black bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-95"
          >
            Napravite nalog
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

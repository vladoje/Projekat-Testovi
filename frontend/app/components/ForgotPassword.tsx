import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import Input from "./Input";
import { useState } from "react";
import toast from "react-hot-toast";
import { isValidEmail } from "~/hooks/useRegister";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-start pt-20 px-6 pb-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors mb-6 ml-1"
        >
          <GoArrowLeft className="w-5 h-5" /> Nazad na login
        </Link>

        <h2 className="text-3xl font-black text-gray-900 tracking-tighter leading-tight">
          Zaboravljena lozinka?
        </h2>
        <p className="mt-2 text-sm text-gray-500 font-medium italic">
          Unesite vaš e-mail da biste napravili novu lozinku
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className={`bg-white py-8 px-8 shadow-xl shadow-indigo-100/30 rounded-[40px] border border-gray-100 space-y-6 ${
            loading ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-[2px] ml-1 mb-2">
              E-mail adresa
            </label>
            <Input
              state={email}
              setState={setEmail}
              type="email"
              placeholder="someone@example.com"
            />
          </div>

          <button
            onClick={handleClick}
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-indigo-200 text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-[0.98] disabled:opacity-50"
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

        <p className="mt-8 text-center text-sm text-gray-500 font-medium">
          Sjećate se lozinke?{" "}
          <Link
            to="/login"
            className="font-black text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Ulogujte se
          </Link>
        </p>
      </div>
    </div>
  );
}

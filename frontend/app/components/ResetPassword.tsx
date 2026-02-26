import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";
import Input from "./Input";
import { isValidPassword } from "./Register";
import toast from "react-hot-toast";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Nova lozinka
        </h2>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Unesite novu lozinku za svoj nalog.
        </p>

        <div className="mt-6">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
            Lozinka
          </label>
          <Input type="password" state={pass1} setState={setPass1} />
        </div>

        <div className="mt-4">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
            Ponovite lozinku
          </label>
          <Input type="password" state={pass2} setState={setPass2} />
        </div>

        <button
          onClick={handleClick}
          disabled={loading}
          className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sačekajte..." : "Promijeni lozinku"}
        </button>

        <Link
          to="/login"
          className="mt-4 block text-center text-sm text-blue-600 hover:underline"
        >
          Nazad na prijavu
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;

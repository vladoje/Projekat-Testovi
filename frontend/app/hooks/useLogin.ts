import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useUser } from "~/userStore";
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password: string) {
  return password.length >= 8; // minimalno 8 znakova
}
export function useLogin() {
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
  return { email, setEmail, password, setPassword, err, setErr, handleClick };
}

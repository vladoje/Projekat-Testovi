import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useUser, type User } from "~/userStore";
const CATEGORY_ORDER = ["A", "B", "C", "D", "T"] as const;
export function isValidEmail(email: string) {
  if (email.length > 100) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function isValidPassword(password: string) {
  return password.length >= 8 && password.length <= 100;
}
export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
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
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    categories,
    setCategories,
    checked,
    setChecked,
    err,
    setErr,
    handleClick,
    toggleCategory,
  };
}

import { useState } from "react";
import toast from "react-hot-toast";
import { useUser, type User } from "~/userStore";
import { useNavigate } from "react-router";
export const CATEGORY_ORDER = ["A", "B", "C", "D", "T"] as const;
export function useProfile() {
  const navigate = useNavigate();

  const toggleCategory = (cat: string) => {
    setCategory((prev) => {
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

  function handleLogout() {
    // Brišemo sve kolačiće
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });

    // Preusmjeravamo korisnika na login
    navigate("/login");
  }

  function handleDelete() {
    fetch("https://projekat-testovi.onrender.com/user/delete-user", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        toast.success("Uspješno ste obrisali vaš nalog");
        handleLogout();
      })
      .catch((err) => {
        toast.error("Došlo je do greške prilikom brisanja naloga");
        console.error(err);
      });
  }
  function handleClick() {
    if (!username) {
      toast.error("Ne mozete iamti prazan username");
      setUsername(user.username);
      return;
    }
    if (!category.length) {
      toast.error("Ne mozete ne polagati ni jednu kategoriju");
      setCategory(user.category.split(","));
      return;
    }
    fetch("https://projekat-testovi.onrender.com/user/update-user", {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, category: category.join(",") }),
    })
      .then(() => toast.success("Uspjesno ste promijenili licne podatke"))
      .catch((err) => {
        toast.error("Došlo je do greške prilikom mijenjanja licnih podataka");
        console.error(err);
      });
  }
  let user: User = useUser.getState().user || {
    id: 0,
    username: "",
    email: "",
    category: "B",
    rijesio_testova: 0,
  };
  const [username, setUsername] = useState(user.username);
  const [category, setCategory] = useState(user.category.split(","));
  return {
    username,
    setUsername,
    category,
    setCategory,
    user,
    handleClick,
    handleDelete,
    handleLogout,
    toggleCategory,
  };
}

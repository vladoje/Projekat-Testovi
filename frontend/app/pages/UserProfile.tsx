import { Link, useNavigate } from "react-router"; // Uvezen Link
import Header from "~/components/Header";
import { FaUser, FaEnvelope, FaIdCard, FaShieldHalved } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { useMe } from "~/helpers/useMe";
import { useUser } from "~/userStore";
import Spinner from "~/components/Spinner";
import Modal from "~/components/Modal";
import type { User } from "../userStore";
import { useEffect, useState } from "react";
import { useModal } from "~/hooks/useModal";
import toast from "react-hot-toast";
const CATEGORY_ORDER = ["A", "B", "C", "D", "T"] as const;
function UserProfile() {
  const { loading } = useMe();
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
  useEffect(() => {
    user = useUser.getState().user || {
      id: 0,
      username: "",
      email: "",
      category: "B",
      rijesio_testova: 0,
    };
  }, [loading]);
  if (loading) return <Spinner />;
  return (
    <Modal>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-10">
        <Header />

        <main className="max-w-md mx-auto px-6 pt-10">
          {/* AVATAR SEKCIJA */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-indigo-200 dark:shadow-none mb-4">
              {user.username.at(0)?.toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {user.username}
            </h1>
            <p className="text-slate-400 text-sm italic">Kandidat za vozača</p>
          </div>

          {/* FORMA ZA PODATKE */}
          <div className="space-y-4">
            {/* KORISNIČKO IME */}
            <div className="group">
              <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 group-focus-within:text-indigo-500 transition-colors">
                <FaUser size={10} /> Korisničko ime
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.slice(0, 200))}
                className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3.5 font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>

            {/* KATEGORIJA */}
            <div className="group">
              <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 group-focus-within:text-indigo-500 transition-colors">
                <FaIdCard size={10} /> Kategorija koju polažete
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_ORDER.map((cat) => {
                  const selected = category.includes(cat);
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
            </div>

            {/* DUGME ZA SPAŠAVANJE */}
            <button
              onClick={handleClick}
              className="w-full mt-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.97] flex items-center justify-center gap-3 shadow-lg cursor-pointer"
            >
              <FaSave /> Sačuvaj izmjene
            </button>
          </div>

          {/* DONJA SEKCIJA - ODJAVA I PRIVATNOST */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <Modal.Open opens="odjavi">
              <button className="text-red-400 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer">
                Odjavi se sa profila
              </button>
            </Modal.Open>
            <Modal.Open opens="obrisi">
              <button className="text-red-400 text-xs font-bold hover:text-red-500 transition-colors cursor-pointer">
                Obrisi profil
              </button>
            </Modal.Open>
            <Link
              to="/privacy-policy"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-500 text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              <FaShieldHalved size={12} /> Politika Privatnosti
            </Link>
          </div>
        </main>
      </div>
      <Modal.Window name="obrisi">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-gray-800">
            Da li ste sigurni da želite obrisati ovaj element?
          </h2>
          <p className="text-gray-500 text-sm">
            Ova akcija se ne može poništiti.
          </p>
          <div className="flex justify-end gap-3">
            <CloseButton />
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Obriši
            </button>
          </div>
        </div>
      </Modal.Window>

      <Modal.Window name="odjavi">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-gray-800">
            Da li ste sigurni da želite da se odjavite?
          </h2>
          <p className="text-gray-500 text-sm">
            Nakon odjave, moraćete ponovo da se ulogujete da biste pristupili
            svom nalogu.
          </p>
          <div className="flex justify-end gap-3">
            <CloseButton />
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Odjavi se
            </button>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default UserProfile;

export function CloseButton() {
  const { close } = useModal();
  return (
    <button
      onClick={close}
      className="flex-1 px-4 py-3 text-sm font-bold text-gray-500 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    >
      Odustani
    </button>
  );
}

import { useUser } from "~/userStore";

import { Link } from "react-router";
import Header from "~/components/Header";
import { lekcije } from "~/data";
import { useMe } from "~/helpers/useMe";

export default function UserDashboard() {
  useMe();

  const user = useUser.getState().user || { category: "", username: "" };

  const categoryMap: Record<string, string> = {
    A: "Motocikli",
    B: "Automobil",
    C: "Kamion i kamion do 7.5t",
    D: "Autobus",
    T: "Traktor i radne mašine",
  };

  const opis = categoryMap[user.category] || "Nepoznata kategorija";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <Header />

      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Dobrodošao nazad,{" "}
          <span className="text-indigo-600">{user.username}</span>!
        </h1>

        {/* SEKCIJA KATEGORIJE */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">🚗 Probni testovi</h2>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <Link
              to={`/categorija/${user.category}`}
              className="flex-none w-64 p-5 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-bold text-gray-800">
                {user.category} kategorija
              </h3>
              <p className="text-sm text-gray-500 mt-1">{opis}</p>
            </Link>

            <Link
              to={`/categorija/P`}
              className="flex-none w-64 p-5 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-bold text-gray-800">Prva pomoć</h3>
              <p className="text-sm text-gray-500 mt-1">Prva pomoć</p>
            </Link>
          </div>
        </section>

        {/* SEKCIJA LEKCIJE */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">📑 Uči po oblastima</h2>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6">
            {lekcije.map((lekcija, i) => (
              <Link
                key={i}
                to={`/lekcija/${lekcija.label.at(0)}`}
                className="flex-none w-72 p-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 active:scale-95 transition-all duration-200 snap-center"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {lekcija.label}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {lekcija.opis}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

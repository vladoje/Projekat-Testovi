import { Link } from "react-router";
import Header from "~/components/Header";
import { categorije, lekcije } from "~/data";

export default function UserDashboard() {
  const name = "Vladimir";

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Header />

      <main className="p-6">
        <h1 className="text-2xl font-bold">Dobrodosli nazad {name}</h1>

        {/* SEKCIJA KATEGORIJE */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">🚗 Probni testovi</h2>

          {/* KONTEJNER KOJI FORSIRA RED */}
          <div className="flex flex-row gap-4 overflow-x-auto pb-4 no-scrollbar">
            {categorije.map((category, i) => (
              <Link
                key={i}
                to={`/categorija/${category.label.at(0)}`}
                className="flex-none w-64 p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <h1 className="font-bold">{category.label}</h1>
                <p className="text-sm text-gray-500">{category.opis}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* SEKCIJA LEKCIJE */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4 px-2">📑 Sva pitanja</h2>

          <div className="flex flex-row gap-4 overflow-x-auto px-2 pb-6 snap-x snap-mandatory scroll-smooth">
            {lekcije.map((lekcija, i) => (
              <Link
                key={i}
                to={`/lekcija/${lekcija.label.at(0)}`}
                className="flex-none w-72 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm snap-center active:scale-95 transition-transform"
              >
                <h1 className="text-xl font-bold text-slate-800">
                  {lekcija.label}
                </h1>
                <p className="text-sm text-gray-500 mt-2 leading-snug">
                  {lekcija.opis}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

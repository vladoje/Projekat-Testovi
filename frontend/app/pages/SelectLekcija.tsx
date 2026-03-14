import { Link, useLocation, useNavigate } from "react-router";
import Header from "~/components/Header";
import { useDarkMode } from "~/context/DarkModeContext";
import { lekcije } from "~/data";

function SelectLekcija() {
  const location = useLocation();

  const category = location.pathname.split("/").at(2) || "";
  const prvaPomoc = category === "P" ? "Prva pomoc" : null;

  const body = lekcije.find((cat) => {
    if (prvaPomoc) return cat.label === "Prva pomoc";
    return cat.label.startsWith(category);
  });
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen ${!isDarkMode ? " bg-background text-text border-border" : "bg-background-dark text-text-dark border-border-dark"} pb-10`}
    >
      <Header />

      <main className="max-w-md mx-auto px-6 pt-8">
        {/* NASLOVNA SEKCIJA */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black  tracking-tight">
            {category === "S"
              ? "Suva pitanja"
              : category === "Z"
                ? "Znakovi"
                : category === "R"
                  ? "Raskrsnice"
                  : "Prva Pomoc"}
          </h1>
          <div className="mt-4 p-4  rounded-2xl  ">
            <p className=" text-sm italic leading-relaxed">
              Odradite test od 20{" "}
              {category === "S"
                ? "cisto teoretskih pitanja"
                : category === "Z"
                  ? "pitanja vezanih za znakove"
                  : category === "R"
                    ? "pitanja vezanih za raskrsnice"
                    : "pitanja vezanih za Prvu pomoc"}{" "}
              izabranih algoritmom koji je pogodan za sto brze ucenje pitanja
            </p>
          </div>
        </div>

        {/* OPCIJE */}
        <div className="space-y-4">
          <Link
            to={`/test/lekcija/${prvaPomoc ? "P" : category}/test`}
            className={`block p-5 border-2 ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} rounded-3xl shadow-lg active:scale-[0.97] transition-all`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                ⏱️
              </div>
              <div>
                <h2 className="text-lg font-bold text-text-dark">
                  Ispitni mod
                </h2>
                <p className="text-text-dark text-xs mt-0.5">
                  Izmjeri svoje znanje pod pritiskom.
                </p>
              </div>
            </div>
          </Link>

          <Link
            to={`/test/lekcija/${prvaPomoc ? "P" : category}/ucenje`}
            className={`block p-5 border-2 ${!isDarkMode ? " bg-primary border-border " : "bg-primary-dark  border-border"} rounded-3xl active:scale-[0.97] transition-all`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10  rounded-2xl flex items-center justify-center text-2xl">
                📖
              </div>
              <div>
                <h2 className="text-lg font-bold text-text-dark">
                  Slobodno učenje
                </h2>
                <p className="text-text-dark text-xs mt-0.5">
                  Pređi sva pitanja, jedno po jedno.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SelectLekcija;

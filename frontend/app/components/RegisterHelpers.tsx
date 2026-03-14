import { Link } from "react-router";
import { useDarkMode } from "~/context/DarkModeContext";
import type { User } from "~/userStore";
const CATEGORY_ORDER = ["A", "B", "C", "D", "T"] as const;

export function CheckPolicy({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: Function;
}) {
  return (
    <div className="flex items-start px-1 py-2">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 border-2  rounded"
        checked={checked}
        onChange={() => setChecked((a: boolean) => !a)}
      />
      <p className="ml-2 text-xs  leading-relaxed">
        Prihvatam{" "}
        <Link
          to="/privacy-policy/bez"
          className=" font-bold decoration-2 underline"
        >
          Politiku Privatnosti
        </Link>{" "}
        i uslove korišćenja.
      </p>
    </div>
  );
}
export function SelectCategory({
  categories,
  toggleCategory,
  user,
}: {
  categories: string[];
  toggleCategory: Function;
  user: User;
}) {
  if (categories.length === 1 && categories.at(0) === "B") {
    categories = user.category.split(",");
  }
  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <label className="block text-xs font-bold  uppercase tracking-widest ml-1 mb-2">
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
                  ? !isDarkMode
                    ? "bg-primary text-secondary"
                    : "bg-secondary-dark"
                  : !isDarkMode
                    ? "bg-secondary"
                    : " bg-primary-dark text-secondary-dark"
              } hover:scale-105 transition-transform`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      {categories.length > 0 && (
        <p className="mt-2 text-sm ">Odabrane: {categories.join(", ")}</p>
      )}
    </div>
  );
}

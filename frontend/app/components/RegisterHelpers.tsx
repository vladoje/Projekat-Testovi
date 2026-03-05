import { Link } from "react-router";
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
        className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={checked}
        onChange={() => setChecked((a: boolean) => !a)}
      />
      <p className="ml-2 text-xs text-gray-500 leading-relaxed">
        Prihvatam{" "}
        <Link
          to="/privacy-policy/bez"
          className="text-indigo-600 font-bold underline"
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
}: {
  categories: string[];
  toggleCategory: Function;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-2">
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
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              } hover:scale-105 transition-transform`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      {categories.length > 0 && (
        <p className="mt-2 text-sm text-gray-500">
          Odabrane: {categories.join(", ")}
        </p>
      )}
    </div>
  );
}

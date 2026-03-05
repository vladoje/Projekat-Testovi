import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { questionTypes } from "~/hooks/useProgress";

export function FilterButtons({
  selectedType,
  setSelectedType,
}: {
  selectedType: string;
  setSelectedType: Function;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
      {questionTypes.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
            selectedType === type
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {type === "all"
            ? "Sve"
            : type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export function SearchProgress({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Function;
}) {
  return (
    <div className="mb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Pretraži pitanja..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-gray-700 w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export interface SelectOrderType {
  sort: string;
  setSort: Function;
  sortDir: string;
  setSortDir: Dispatch<SetStateAction<"asc" | "desc">>;
}
export function SelectOrder({
  sort,
  setSort,
  sortDir,
  setSortDir,
}: SelectOrderType) {
  return (
    <div className="mb-4 flex gap-2">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
      flex-1
      bg-white border border-gray-300
      rounded-lg px-3 py-2.5
      text-sm text-gray-700
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
      >
        <option value="k">Po kategoriji</option>
        <option value="a">Abecedno</option>
        <option value="t">Broj zaredom tačnih</option>
        <option value="n">Broj grešaka</option>
        <option value="v">Puta viđeno</option>
      </select>

      <button
        type="button"
        onClick={() =>
          setSortDir((d: string) => (d === "asc" ? "desc" : "asc"))
        }
        className="
    min-w-22.5
    px-3 py-2.5
    rounded-lg
    border border-gray-300
    bg-white
    text-sm font-semibold
    text-gray-700
    hover:bg-gray-50
    flex items-center justify-center
  "
      >
        {sortDir === "asc" ? "↑ ASC" : "↓ DESC"}
      </button>
    </div>
  );
}

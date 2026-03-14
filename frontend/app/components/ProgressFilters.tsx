import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useDarkMode } from "~/context/DarkModeContext";
import { questionTypes } from "~/hooks/useProgress";

export function FilterButtons({
  selectedType,
  setSelectedType,
}: {
  selectedType: string;
  setSelectedType: Function;
}) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
      {questionTypes.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
            selectedType === type
              ? `text-text-dark ${
                  !isDarkMode
                    ? "bg-primary border border-border"
                    : "bg-primary-dark border border-border-dark"
                }`
              : `${!isDarkMode ? "bg-surface border border-border" : "bg-background-dark border border-border-dark"}`
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
  const { isDarkMode } = useDarkMode();
  return (
    <div className="mb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-4 h-4" />
        <input
          type="text"
          placeholder="Pretraži pitanja..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`
    
    w-full pl-10 pr-4 py-2.5
    rounded-lg
  border 
          ${!isDarkMode ? "bg-surface border-border" : "border-border-dark bg-surface-dark"}
   
  `}
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
  const { isDarkMode } = useDarkMode();
  return (
    <div className="mb-4 flex gap-2">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className={`
        ${!isDarkMode ? "bg-surface border-border " : "bg-surface-dark border-border-dark"}
          flex-1 border
    rounded-lg px-3 py-2.5
    text-sm 

  `}
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
        className={`
  px-3 py-2.5
  rounded-lg
 ${!isDarkMode ? "bg-surface border-border " : "bg-surface-dark border-border-dark"}
  text-sm font-semibold

`}
      >
        {sortDir === "asc" ? "↑ ASC" : "↓ DESC"}
      </button>
    </div>
  );
}

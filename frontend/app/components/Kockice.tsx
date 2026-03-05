import { useEffect, useRef } from "react";
import type { pitanje } from "~/hooks/useTestData";

export function Kockice({
  i,
  setI,
  pitanja,
  handleSelect,
  trenutnoPitanje,
}: {
  i: number;
  setI: Function;
  pitanja: pitanje[];
  handleSelect: Function;
  trenutnoPitanje: pitanje;
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect ostaje skoro isti, ali TS će sada znati šta je activeItem
  useEffect(() => {
    const activeItem = itemsRef.current[i];
    activeItem?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [i]);
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div
        ref={scrollContainerRef} // Ref na kontejner
        className="flex overflow-x-auto py-6 px-6 no-scrollbar gap-3 items-center"
      >
        {pitanja.map((p, index) => (
          <div
            onClick={() => {
              handleSelect(trenutnoPitanje);
              setI(index + 1);
            }}
            key={p.question_id}
            ref={(el) => {
              itemsRef.current[index + 1] = el;
            }}
            className={`flex-none w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all
  ${
    index + 1 === i
      ? "bg-indigo-600 text-white scale-110 shadow-lg"
      : index + 1 < i
        ? "bg-emerald-100 text-emerald-600"
        : "bg-slate-100 text-slate-400"
  }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

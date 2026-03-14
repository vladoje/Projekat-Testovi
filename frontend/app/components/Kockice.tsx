import { useEffect, useRef } from "react";
import { useDarkMode } from "~/context/DarkModeContext";
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
  const { isDarkMode } = useDarkMode();
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
    <div
      className={`${!isDarkMode ? " bg-background  border-border" : "bg-background-dark  border-border-dark"} text-text-dark`}
    >
      <div
        ref={scrollContainerRef} // Ref na kontener
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
      ? `${isDarkMode ? "bg-primary" : "bg-primary-dark"}  scale-110 shadow-lg`
      : index + 1 < i
        ? `${!isDarkMode ? "bg-secondary text-text" : "bg-secondary"} `
        : `${!isDarkMode ? "bg-surface text-text" : "bg-surface-dark"} `
  }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

import type { MouseEventHandler } from "react";

export function OptionCard({
  label,
  text,
  checked,
  onChange,
  isDarkMode,
}: {
  label: string;
  text: string;
  checked: Boolean;
  onChange?: MouseEventHandler<HTMLDivElement>;
  isDarkMode: Boolean;
}) {
  return (
    <div
      onClick={onChange}
      className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer active:scale-[0.98]
        ${
          checked
            ? `${!isDarkMode ? "bg-border" : "bg-secondary-dark"}`
            : `${!isDarkMode ? "bg-surface" : "bg-surface-dark"}`
        }`}
    >
      <div
        className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs transition-colors
        ${
          checked
            ? !isDarkMode
              ? "bg-secondary"
              : "bg-secondary-dark"
            : !isDarkMode
              ? "bg-border text-primary"
              : "bg-border-dark text-primary"
        }`}
      >
        {label}
      </div>

      <span className="text-sm font-semibold transition-colors min-w-0">
        {text}
      </span>

      <div
        className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center
        ${
          checked
            ? !isDarkMode
              ? "bg-border"
              : "bg-border-dark"
            : !isDarkMode
              ? "border-border"
              : "border-border-dark"
        }`}
      >
        {checked && (
          <div
            className={`w-2 h-2 ${
              !isDarkMode ? "bg-primary" : "bg-primary-dark"
            } rounded-full`}
          />
        )}
      </div>
    </div>
  );
}

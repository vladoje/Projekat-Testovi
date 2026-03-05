import type { MouseEventHandler } from "react";

export function OptionCard({
  label,
  text,
  checked,
  onChange,
}: {
  label: string;
  text: string;
  checked: boolean;
  onChange?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={onChange}
      className={`group flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer active:scale-[0.98]
        ${
          checked
            ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
            : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200"
        }`}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors
        ${checked ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}
      >
        {label}
      </div>
      <span
        className={`ml-4 text-sm font-semibold transition-colors
        ${checked ? "text-indigo-900 dark:text-indigo-100" : "text-slate-600 dark:text-slate-400"}`}
      >
        {text}
      </span>
      <div
        className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${checked ? "border-indigo-600 bg-indigo-600" : "border-slate-200 dark:border-slate-700"}`}
      >
        {checked && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
    </div>
  );
}

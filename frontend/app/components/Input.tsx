import { type ReactNode } from "react";

function Input({
  type = "text",
  label,
  defaultValue,
  placeholder,
  state,
  setState,
}: {
  type?: string;
  label?: ReactNode;
  defaultValue?: string;
  placeholder?: string;
  state?: string;
  setState?: (state: string) => void;
}) {
  const stil =
    "w-full text-base font-medium text-blue-700 border-2 border-gray-200 rounded-2xl py-3.5 px-5 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50/50 outline-none transition-all placeholder:text-gray-300";
  if (state !== undefined && setState) {
    return (
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide ml-1 mb-2">
          {label}
        </label>
        <input
          type={type}
          className={stil}
          value={state ?? ""}
          onChange={(e) => {
            setState?.(e.target.value);
          }}
        />
      </div>
    );
  }
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={stil}
    />
  );
}

export default Input;

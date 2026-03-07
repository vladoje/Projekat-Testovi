import { useState, useEffect } from "react";

export function useLocalStorageState(initialState: boolean, key: string) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

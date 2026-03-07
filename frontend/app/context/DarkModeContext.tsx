import { createContext, useContext, useEffect, type ReactElement } from "react";
import { useLocalStorageState } from "~/hooks/useLocalStorage";
export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);
function DarkModeProvider({ children }: { children: ReactElement }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode],
  );
  function toggleDarkMode() {
    setIsDarkMode((s: boolean) => !s);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === null) throw new Error("koristio si izvan opsega useDarkMode");
  return context;
}
export { DarkModeProvider, useDarkMode };

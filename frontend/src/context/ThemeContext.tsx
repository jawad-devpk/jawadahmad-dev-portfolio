import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { globalStyles } from "./globalStyles";

interface Props {
  children: ReactNode;
}

interface ThemeContextProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeContextProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const storedMode = localStorage.getItem("themeMode");
    return storedMode === "dark" ? "dark" : "light";
  });

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

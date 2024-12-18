import { createTheme } from "@mui/material/styles";
import { darkColors } from "../colors";
import { baseTypography } from ".";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkColors.primary,
    },
    secondary: {
      main: darkColors.secondary,
    },
    error: {
      main: darkColors.error,
    },
    warning: {
      main: darkColors.warning,
    },
    success: {
      main: darkColors.success,
    },
    background: {
      default: darkColors.background,
      paper: darkColors.paper,
    },
  },
  typography: baseTypography,
});

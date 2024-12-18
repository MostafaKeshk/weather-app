import { createTheme } from "@mui/material/styles";
import { lightColors } from "../colors";
import { baseTypography } from ".";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightColors.primary,
    },
    secondary: {
      main: lightColors.secondary,
    },
    error: {
      main: lightColors.error,
    },
    warning: {
      main: lightColors.warning,
    },
    success: {
      main: lightColors.success,
    },
    background: {
      default: lightColors.background,
      paper: lightColors.paper,
    },
  },
  typography: baseTypography,
});

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useThemeMode } from "../../../styles/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link as MUILink } from "@mui/material";
import { NavLink } from "react-router";
import { Paths } from "../../../routes/paths";

const Nav = () => {
  const { mode, toggleTheme } = useThemeMode();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Weather App
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex" alignItems="center" gap={1}>
          <MUILink
            component={NavLink}
            to={Paths.home}
            color="inherit"
            underline="hover"
          >
            Home
          </MUILink>
          <IconButton
            size="large"
            aria-label="theme switcher"
            color="inherit"
            onClick={toggleTheme}
          >
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

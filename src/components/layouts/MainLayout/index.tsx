import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Nav from "./Nav";

const MainLayout = () => {
  return (
    <Box>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default MainLayout;

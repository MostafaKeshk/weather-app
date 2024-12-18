import { Box, CircularProgress } from "@mui/material";
import { styles } from "./styles";

const LoadingPage = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingPage;

import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation";
import ThemeProvider from "./styles/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;

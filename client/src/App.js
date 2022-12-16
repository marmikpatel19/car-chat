import "./styling/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans Buhid", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#48a4c8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#377892",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

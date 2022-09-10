import "./styling/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = import("./components/pages/home");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

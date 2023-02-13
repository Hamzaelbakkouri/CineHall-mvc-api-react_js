import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";
import Movies from "./pages/Movies";
import Reservations from "./pages/Reservations";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/Reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

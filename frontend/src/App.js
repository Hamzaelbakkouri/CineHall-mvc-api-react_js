import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";
import Movies from "./pages/Movies";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Footer from "./components/Footer";
import ReservationUser from "./components/ReservationUser";
// import { useState } from "react";

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/reserveUser" element={<ReservationUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

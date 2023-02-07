import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";



function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Register />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Consulter from "./components/Consulter";
import 'leaflet/dist/leaflet.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/consulter" element={<Consulter />} />
    </Routes>
  );
}

export default App;

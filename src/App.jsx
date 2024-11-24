import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "boxicons";
import Home from "./Home";
import Admin from "./Admin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      HI guys 
    </div>
  );
}

export default App;

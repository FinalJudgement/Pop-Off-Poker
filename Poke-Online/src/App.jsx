// import { useState } from "react";
import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokerTable from "./components/PokerTable";
import Navbar from "./components/Navbar";

const App = () => {
  console.log("Rendering App Component");
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<PokerTable />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

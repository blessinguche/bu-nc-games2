import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        
        {/* <Route path="/*" element={<ErrorPage  />} /> */}
      </Routes>
    </div>
  );
}

export default App;

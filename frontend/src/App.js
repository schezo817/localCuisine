import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GachaScreen from "./GachaScreen";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/GachaScreen" element={<GachaScreen />} />
        <Route path="/SearchScreen" element={<SearchScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

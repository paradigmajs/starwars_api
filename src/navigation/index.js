import React from "react";
import { Route, Routes } from "react-router-dom";
import Not_Found from "../components/NFound";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:category" element={<Result/>} />
      <Route path={`*`} element={<Not_Found />} />
    </Routes>
  );
}

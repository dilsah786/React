import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Login from "../Login";
import Error from "../Error";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

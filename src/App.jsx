import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import CourseDetails from "./components/CourseDetails"; // Import a placeholder component for courses
import ServiceDetails from "./components/ServiceDetails"; // Import a placeholder component for services

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services/:service" element={<ServiceDetails />} />
        <Route path="/courses/:course" element={<CourseDetails />} />
        <Route path="/contact" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import CourseDetails from "./components/CourseDetails"; // Import a placeholder component for courses
import ServiceDetails from "./components/ServiceDetails"; // Import a placeholder component for services
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import ContactPage from "./components/ContactPage";
import Blog from "./components/Blogs/Blog";
import ViewBlog from "./components/Blogs/ViewBlog";
import MyBlogs from "./components/Blogs/MyBlogs";
import CreateBlog from "./components/Blogs/CreateBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:service" element={<ServiceDetails />} />
        <Route path="/courses/:course" element={<CourseDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/view" element={<Blog />} />
        <Route path="/blog/:blogId" element={<ViewBlog />} />
        <Route path="/blogs/my" element={<MyBlogs />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

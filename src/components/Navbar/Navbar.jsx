import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link and useLocation
import logo from "../../assets/logo-2.jpg";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);
  const location = useLocation(); // Get the current route
  const services = useSelector((state) => state.services.items);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Animation variants for dropdowns
  const dropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  return (
    <div className="w-full fixed bg-white text-black shadow-md z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="w-36">
          <img src={logo} className="h-12 w-auto object-contain" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-lg">
          <li
            className={`${
              location.pathname === "/"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${
              location.pathname === "/about"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`relative ${
              location.pathname === "/services"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center justify-between w-full">
              Services <FaAngleDown className="ml-1 text-sm" />
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.ul
                  className="absolute top-full w-72 left-0 bg-white text-gray-800 shadow-lg mt-2 rounded-2xl p-5 pl-4 space-y-1 text-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services && services.length > 0 ? (
                    services.map((service, index) => (
                      <motion.li
                        key={service.id}
                        onClick={() => navigate(`/services/${service.name}`)}
                        className="hover:text-cyan-500 transition-colors duration-200"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        {service.name}
                      </motion.li>
                    ))
                  ) : (
                    <li className="text-gray-400">No services found</li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li
            className={`relative ${
              location.pathname === "/courses"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <button className="flex items-center justify-between w-full">
              Courses <FaAngleDown className="ml-1 text-sm" />
            </button>
            <AnimatePresence>
              {showCourses && (
                <motion.ul
                  className="absolute top-full w-72 left-0 bg-white text-gray-800 shadow-lg mt-2 rounded-2xl p-5 pl-4 space-y-1 text-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {[
                    "AI for Making Office Tasks Easy",
                    "Cloud Computing Essential",
                    "Machine Learning",
                    "Data Science",
                    "Generative AI",
                    "Python for All",
                    "Remote Sensing and GIS",
                    "Natural Language Processing (NLP)",
                    "Computer Vision",
                  ].map((course, index) => (
                    <motion.li
                      key={index}
                      onClick={() => navigate(`/courses/${course}`)}
                      className="hover:text-cyan-500 transition-colors duration-200"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      {course}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li
            className={`relative ${
              location.pathname === "/blogs"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
            onMouseEnter={() => setShowBlogs(true)}
            onMouseLeave={() => setShowBlogs(false)}
          >
            <button className="flex items-center justify-between w-full">
              Blogs <FaAngleDown className="ml-1 text-sm" />
            </button>
            <AnimatePresence>
              {showBlogs && (
                <motion.ul
                  className="absolute top-full w-72 left-0 bg-white text-gray-800 shadow-lg mt-2 rounded-2xl p-5 pl-4 space-y-1 text-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {[
                    { label: "ViewBlogs", path: "/blogs/view" },
                    { label: "Create Blog", path: "/blogs/create" },
                    { label: "My blog", path: "/blogs/my" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      onClick={() => navigate(item.path)}
                      className="hover:text-cyan-500 transition-colors duration-200"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      {item.label}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li
            className={`${
              location.pathname === "/gallery"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
          >
            <Link to="/gallery">Gallery</Link>
          </li>
          <li
            className={`${
              location.pathname === "/contact"
                ? "text-cyan-500"
                : "hover:text-cyan-400"
            } transition-colors duration-300 cursor-pointer`}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Quote Button (Desktop) */}
        <div className="hidden md:block ml-6">
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold py-2 px-5 rounded-full shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(20, 184, 166, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            GET A QUOTE
          </motion.button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <motion.div
          className="md:hidden text-2xl cursor-pointer"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-[85%] h-full bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 shadow-lg z-50 p-6 md:hidden overflow-y-auto"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Close button and Logo */}
            <motion.div
              className="flex justify-between items-center mb-8"
              variants={menuItemVariants}
            >
              <img src={logo} className="h-10 w-auto" alt="Logo" />
              <motion.button
                onClick={toggleMenu}
                className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white p-2 rounded-full shadow"
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </motion.div>

            {/* Menu Items */}
            <ul className="space-y-5 font-semibold text-lg">
              <motion.li
                className={`${
                  location.pathname === "/" ? "text-cyan-500" : "text-cyan-400"
                } cursor-pointer`}
                variants={menuItemVariants}
              >
                <Link to="/">Home</Link>
              </motion.li>

              <motion.li
                className={`${
                  location.pathname === "/about"
                    ? "text-cyan-500"
                    : "text-white hover:text-cyan-400"
                } transition-colors duration-300 cursor-pointer`}
                variants={menuItemVariants}
              >
                <Link to="/about">About Us</Link>
              </motion.li>

              {/* Services dropdown */}
              <motion.li variants={menuItemVariants}>
                <motion.button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: showServices ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaAngleDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {showServices && (
                    <motion.ul
                      className="mt-3 pl-4 space-y-3 text-gray-300"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      {services && services.length > 0 ? (
                        services.map((service, index) => (
                          <motion.li
                            key={service.id}
                            className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {service.name}
                          </motion.li>
                        ))
                      ) : (
                        <li className="text-gray-400">No services found</li>
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Courses dropdown */}
              <motion.li variants={menuItemVariants}>
                <motion.button
                  onClick={() => setShowCourses(!showCourses)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  Courses
                  <motion.div
                    animate={{ rotate: showCourses ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaAngleDown />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {showCourses && (
                    <motion.ul
                      className="mt-3 pl-4 space-y-3 text-gray-300"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      {[
                        "AI for Office",
                        "Cloud Computing",
                        "Machine Learning",
                        "Data Science",
                        "Generative AI",
                        "Python",
                        "Remote Sensing",
                        "NLP",
                        "Computer Vision",
                      ].map((course, index) => (
                        <motion.li
                          key={index}
                          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {course}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Blogs dropdown */}
              <motion.li variants={menuItemVariants}>
                <motion.button
                  onClick={() => setShowBlogs(!showBlogs)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  Blogs
                  <motion.div
                    animate={{ rotate: showBlogs ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaAngleDown />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {showBlogs && (
                    <motion.ul
                      className="mt-3 pl-4 space-y-3 text-gray-300"
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      {[
                        { label: "ViewBlogs", path: "/blogs/view" },
                        { label: "Create Blog", path: "/blogs/create" },
                        { label: "My blog", path: "/blogs/my" },
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            setMenuOpen(false);
                            navigate(item.path);
                          }}
                        >
                          {item.label}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li
                className={`${
                  location.pathname === "/gallery"
                    ? "text-cyan-500"
                    : "text-white hover:text-cyan-400"
                } transition-colors duration-300 cursor-pointer`}
                variants={menuItemVariants}
              >
                <Link to="/gallery">Gallery</Link>
              </motion.li>

              <motion.li
                className={`${
                  location.pathname === "/contact"
                    ? "text-cyan-500"
                    : "text-white hover:text-cyan-400"
                } transition-colors duration-300 cursor-pointer`}
                variants={menuItemVariants}
              >
                <Link to="/contact">Contact Us</Link>
              </motion.li>

              <motion.li variants={menuItemVariants}>
                <motion.button
                  className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white py-3 px-6 rounded-full shadow-lg font-semibold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  GET A QUOTE
                </motion.button>
              </motion.li>
            </ul>

            {/* Decorative elements */}
            <div className="absolute bottom-10 right-5 w-32 h-32 bg-cyan-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-teal-400 rounded-full opacity-10 blur-xl"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

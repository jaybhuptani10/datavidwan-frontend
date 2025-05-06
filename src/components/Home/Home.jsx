import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Aivisualization from "./Aivisualization";
import OurServices from "./OurServices";
import TrainingPage from "./training";
import OurExpertise from "./OurExpertise";
import ContactPage from "../ContactPage";
import ContactSection from "./ContactSection";

import BlogsSection from "./BlogsSection";
import Footer from "./Footer";

const Home = () => {
  const [animateGraph, setAnimateGraph] = useState(false);

  useEffect(() => {
    // Trigger graph animation after component mount
    setAnimateGraph(true);

    // For floating animation of decorative elements
    const interval = setInterval(() => {
      // This will re-render the decorative elements with new positions
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // AI-related services
  const aiServices = [
    "Intelligent Automation",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              Pioneering AI Solutions
            </h2>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="sm:mt-0 mt-10 block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
              Data
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">
              Vidwan
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Building next-generation AI products that transform industries. Our
            research-driven approach combines cutting-edge algorithms with deep
            domain expertise to deliver intelligent solutions that solve
            real-world problems.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-3 flex items-center text-black cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 015-2.234V12z"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-base font-medium">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 201, 219, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE SOLUTIONS
            </motion.button>

            <motion.button
              className="flex items-center justify-center bg-transparent border border-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Our Research
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image - AI Visualization */}
        <Aivisualization animateGraph={animateGraph} />
      </div>
      {/* Service Section */}
      <OurServices />
      {/* Training Page */}
      <TrainingPage />
      {/* Our Expertise */}
      <OurExpertise />
      {/* Contact Section */}
      <ContactSection />
      {/* BLogs Section */}
      <BlogsSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

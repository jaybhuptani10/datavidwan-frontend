import React from "react";
import logo from "../../assets/logo-2.jpg";
const Footer = () => {
  return (
    <div className="w-full mt-10 bg-blue-900 text-white py-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Address */}
        <div>
          <img src={logo} alt="Data Vidwan Logo" className="h-12 mb-4" />
          <p>
            Data Vidwan, 1201, The Atlantis, Near Aditya Green, Near Vaishnav
            Devi Circle, Zundal, 382421
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Help & Support
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Disclosures
          </a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        Copyright © 2024 DATA VIDWAN All rights reserved
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const quickLinks = [
    { name: "Help & Support", href: "#support" },
    { name: "Careers", href: "#careers" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Disclosures", href: "#disclosures" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Coordinates for Zundal, Ahmedabad
  const officeLocation = {
    lat: 23.1293,
    lng: 72.6519,
    address:
      "Data Vidwan, 1201, The Atlantis, Near Aditya Green, Near Vaishnav Devi Circle, Zundal, 382421",
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info & Map */}
            <div className="lg:col-span-6 space-y-8">
              {/* Logo and Company Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold">DV</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      DATA VIDWAN
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Empowering Data Intelligence
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group cursor-pointer hover:text-blue-400 transition-colors">
                    <MapPin className="w-5 h-5 mt-1 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                        {officeLocation.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:text-blue-400 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      +91 XXX XXX XXXX
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      contact@datavidwan.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Map Section */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
                <div
                  className="p-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 cursor-pointer flex items-center justify-between hover:from-slate-700/80 hover:to-slate-600/80 transition-all"
                  onClick={() => setIsMapExpanded(!isMapExpanded)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-medium">Office Location</span>
                  </div>
                  <ChevronUp
                    className={`w-5 h-5 transition-transform ${
                      isMapExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isMapExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="h-80">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.234567890123!2d${officeLocation.lng}!3d${officeLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzQ1LjUiTiA3MsKwMzknMDYuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="filter brightness-90 contrast-110"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Quick Links
                </h4>
                <nav className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                    >
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Connect With Us
                </h4>

                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      >
                        <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                  <h5 className="font-medium mb-3 text-white">Stay Updated</h5>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-slate-400">
                Copyright © 2024{" "}
                <span className="text-white font-medium">DATA VIDWAN</span>. All
                rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>Made with ❤️ in India</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  // Get services from Redux store
  const services = useSelector((state) => state.services.items);
  const loading = useSelector((state) => state.services.loading);
  const navigate = useNavigate();
  const error = useSelector((state) => state.services.error);

  // Hover state for cards
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-100 opacity-50"></div>
      <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full bg-teal-100 opacity-50"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-indigo-50 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-50 opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver cutting-edge AI solutions powered by advanced analytics
            and machine learning to transform your business.
          </p>
        </div>

        {/* Services grid */}
        {loading ? (
          <div className="text-center text-lg text-gray-500 py-10">
            Loading services...
          </div>
        ) : error ? (
          <div className="text-center text-lg text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services && services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id || service._id || service.name}
                  className={`bg-white rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 cursor-pointer ${
                    hoveredCard === (service.id || service._id || service.name)
                      ? "shadow-xl scale-105"
                      : "shadow-md"
                  }`}
                  onMouseEnter={() =>
                    setHoveredCard(service.id || service._id || service.name)
                  }
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon with gradient background */}
                  <div className="mb-5 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg opacity-10"></div>
                    <div
                      className={`p-4 rounded-lg w-16 h-16 transition-all duration-300 ${
                        hoveredCard ===
                        (service.id || service._id || service.name)
                          ? "text-blue-600 transform -translate-y-1"
                          : "text-blue-500"
                      }`}
                    >
                      {/* Optionally, you can use a default icon or map service.icon to a real icon */}
                      {/* {renderIcon(service.icon)} */}
                      <span className="text-3xl">🛠️</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.name || service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More link */}
                  <div className="mt-auto">
                    <a
                      href="#"
                      className={`inline-flex items-center text-base font-medium transition-all duration-300 ${
                        hoveredCard ===
                        (service.id || service._id || service.name)
                          ? "text-blue-600"
                          : "text-blue-500"
                      }`}
                    >
                      Learn More
                      <svg
                        className={`ml-2 w-5 h-5 transform transition-all duration-300 ${
                          hoveredCard ===
                          (service.id || service._id || service.name)
                            ? "translate-x-1"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-lg text-gray-400 col-span-3">
                No services found.
              </div>
            )}
          </div>
        )}

        {/* View All Services button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            VIEW ALL SERVICES
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

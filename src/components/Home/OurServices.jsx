import React from "react";
import { useState } from "react";

const OurServices = () => {
  // Service data with icons, titles, and descriptions
  const services = [
    {
      id: 1,
      icon: "chart-bar",
      title: "EDA (Exploratory Data Analysis)",
      description:
        "Uncover hidden patterns and trends within your data to gain valuable insights that drive strategic decision-making.",
    },
    {
      id: 2,
      icon: "lightbulb",
      title: "Use Case Building from Data",
      description:
        "Develop practical applications and solutions tailored to specific business needs, leveraging the power of data-driven strategies.",
    },
    {
      id: 3,
      icon: "brain",
      title: "Machine Learning Model Development",
      description:
        "Harness the potential of machine learning algorithms to build predictive models that optimize processes and outcomes.",
    },
    {
      id: 4,
      icon: "database",
      title: "Data Gathering",
      description:
        "Efficiently collect and compile data from diverse sources, ensuring comprehensive coverage for informed analysis.",
    },
    {
      id: 5,
      icon: "sparkles",
      title: "Data Cleaning",
      description:
        "Ensure data accuracy and consistency through meticulous cleaning and preprocessing, laying a robust foundation for reliable analytics.",
    },
    {
      id: 6,
      icon: "chart-pie",
      title: "Dashboard Creating",
      description:
        "Visualize complex data sets into intuitive dashboards, empowering stakeholders with real-time insights for timely decisions.",
    },
  ];

  // Hover state for cards
  const [hoveredCard, setHoveredCard] = useState(null);

  // Render specific icons based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "chart-bar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "lightbulb":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "brain":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
        );
      case "database":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        );
      case "sparkles":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      case "chart-pie":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 cursor-pointer ${
                hoveredCard === service.id ? "shadow-xl scale-105" : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon with gradient background */}
              <div className="mb-5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg opacity-10"></div>
                <div
                  className={`p-4 rounded-lg w-16 h-16 transition-all duration-300 ${
                    hoveredCard === service.id
                      ? "text-blue-600 transform -translate-y-1"
                      : "text-blue-500"
                  }`}
                >
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
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
                    hoveredCard === service.id
                      ? "text-blue-600"
                      : "text-blue-500"
                  }`}
                >
                  Learn More
                  <svg
                    className={`ml-2 w-5 h-5 transform transition-all duration-300 ${
                      hoveredCard === service.id ? "translate-x-1" : ""
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
          ))}
        </div>

        {/* View All Services button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
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

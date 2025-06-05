import React from "react";

const Hero = ({ serviceDetails, openModal }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" fill="white" />
          <circle cx="150" cy="150" r="100" fill="currentColor" />
          <circle cx="150" cy="150" r="50" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Professional Service
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {serviceDetails.name}
        </h1>

        {serviceDetails.description && (
          <div>
            <p className="text-xl text-white text-opacity-90 leading-relaxed mb-8">
              {Array.isArray(serviceDetails.description)
                ? serviceDetails.description[0]
                : serviceDetails.description}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <button
            onClick={openModal}
            className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-8 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

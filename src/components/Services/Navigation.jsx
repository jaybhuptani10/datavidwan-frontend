import React from "react";

const Navigation = ({ serviceDetails }) => {
  return (
    <div className="mb-8 flex items-center text-sm text-gray-500">
      <a href="/" className="hover:text-indigo-600 transition-colors">
        Home
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mx-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <a href="/services" className="hover:text-indigo-600 transition-colors">
        Services
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mx-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="text-indigo-800 font-medium">{serviceDetails.name}</span>
    </div>
  );
};

export default Navigation;

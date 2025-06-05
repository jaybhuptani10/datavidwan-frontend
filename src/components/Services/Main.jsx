import React from "react";

const Main = ({ serviceDetails, openModal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left column - main content */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            About This Service
          </h2>

          <div className="space-y-6">
            {Array.isArray(serviceDetails.description) ? (
              serviceDetails.description.slice(1).map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-600">{serviceDetails.description}</p>
            )}
          </div>
        </div>

        {/* Our Offerings section */}
        <div className="bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            Our Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.process &&
              serviceDetails.process.map((offering, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500 text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {offering}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Right column - sidebar */}
      <div className="space-y-8">
        {/* CTA box */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-md p-6 border border-indigo-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is ready to help you implement {serviceDetails.name} for
            your business needs.
          </p>
          <button
            onClick={openModal}
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-6 rounded-lg font-medium shadow-md transition-all duration-300"
          >
            Request a Consultation
          </button>
          {/* <a
            href="#pricing"
            className="block w-full bg-white mt-3 text-indigo-600 text-center py-3 px-6 rounded-lg font-medium shadow-sm border border-indigo-200 hover:bg-indigo-50 transition-all duration-300"
          >
            View Pricing Options
          </a> */}
        </div>

        {/* Key benefits */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Key Benefits
          </h3>

          <ul className="space-y-4">
            {serviceDetails.benefits &&
              serviceDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{benefit}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-indigo-600">
                  contact@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-indigo-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

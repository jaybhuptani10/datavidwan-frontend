import React, { useEffect, useState } from "react";
import servicesData from "../services.json"; // Import services data from JSON file
import { useParams } from "react-router-dom";

// Note: In your actual application, you'd use react-router-dom's useParams() hook
// This is a demonstration component that simulates the functionality
const ServiceDetails = () => {
  // In a real app, this would be from useParams()
  const { service } = useParams();
  const decodedService = service; // In a real app, this would be decodeURIComponent(service)
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    // Find the service details from the JSON data
    const foundService = servicesData.services.find(
      (s) => s.title === decodedService
    );
    setServiceDetails(foundService);
  }, [decodedService]);

  if (!serviceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md border-t-4 border-indigo-600">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The service "{decodedService}" does not exist or may have been
            moved.
          </p>
          <a
            href="/services"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Browse All Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation breadcrumb */}
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
          <a
            href="/services"
            className="hover:text-indigo-600 transition-colors"
          >
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
          <span className="text-indigo-800 font-medium">
            {serviceDetails.title}
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden">
          {/* Background decorative element */}
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

          {/* Content */}
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
              {serviceDetails.title}
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
              <button className="bg-white text-indigo-700 hover:bg-indigo-50 py-3 px-8 rounded-lg font-medium shadow-lg transition-all duration-300 flex items-center">
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
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 py-3 px-8 rounded-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
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
                  serviceDetails.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">{serviceDetails.description}</p>
                )}
              </div>
            </div>

            {/* Process section */}
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Our Process
              </h2>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-100"></div>

                {/* Steps */}
                <div className="space-y-12">
                  {[
                    {
                      title: "Discovery",
                      description:
                        "We analyze your requirements and define project scope",
                    },
                    {
                      title: "Development",
                      description:
                        "Our team implements the solution using industry best practices",
                    },
                    {
                      title: "Delivery",
                      description:
                        "Final deliverables are presented with comprehensive documentation",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-800 font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                Our team is ready to help you implement {serviceDetails.title}{" "}
                for your business needs.
              </p>
              <a
                href="#contact"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-6 rounded-lg font-medium shadow-md transition-all duration-300"
              >
                Request a Consultation
              </a>
              <a
                href="#pricing"
                className="block w-full bg-white mt-3 text-indigo-600 text-center py-3 px-6 rounded-lg font-medium shadow-sm border border-indigo-200 hover:bg-indigo-50 transition-all duration-300"
              >
                View Pricing Options
              </a>
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
                {[
                  "Faster data-driven decision making",
                  "Improved accuracy in predictions",
                  "Clear visualization of complex patterns",
                  "Cost-effective solutions",
                ].map((benefit, index) => (
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
                    <p className="font-medium text-indigo-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related services */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Related Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Data Gathering",
                  "Cleaning",
                  "ML Model Development",
                  "Dashboards",
                ].map((relatedService, index) => (
                  <li key={index}>
                    <a
                      href={`/services/${encodeURIComponent(relatedService)}`}
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                      {relatedService}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

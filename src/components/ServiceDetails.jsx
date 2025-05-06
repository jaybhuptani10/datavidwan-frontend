import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../services.json"; // Import services data from JSON file

const ServiceDetails = () => {
  const { service } = useParams();
  const decodedService = decodeURIComponent(service); // Decode the parameter to handle spaces and special characters
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-600">
            The service "{decodedService}" does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {serviceDetails.title}
          </h1>
          <p className="text-lg text-teal-50">{serviceDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

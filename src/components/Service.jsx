import React, { useState } from "react";
import { ArrowLeft, ChevronRight, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../store/servicesSlice";

const Service = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    items: services,
    loading,
    error,
  } = useSelector((state) => state.services);
  const [selectedService, setSelectedService] = useState(null);
  const [animateCards, setAnimateCards] = useState(true);

  React.useEffect(() => {
    if (!services.length) {
      dispatch(fetchServices());
    }
  }, [dispatch, services.length]);

  const handleServiceClick = (service) => {
    setAnimateCards(false);
    setTimeout(() => {
      setSelectedService(service);
    }, 300);
  };

  const handleBack = () => {
    setSelectedService(null);
    setTimeout(() => {
      setAnimateCards(true);
    }, 100);
  };

  const serviceList = Array.isArray(services) ? services : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 pt-30 px-4">
      <div className="max-w-6xl mx-auto">
        {!selectedService ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Our Data Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforming your business through data-driven solutions and
                expert analysis
              </p>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
                animateCards ? "opacity-100" : "opacity-0"
              }`}
            >
              {serviceList.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                  onClick={() => handleServiceClick(service)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: animateCards
                      ? "fadeInUp 0.6s ease forwards"
                      : "none",
                  }}
                >
                  {/* You can add an image or icon here if your API provides it */}
                  <div className="h-40 bg-gray-200 flex items-center justify-center text-2xl font-bold text-blue-600">
                    {service.name}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">
                      {Array.isArray(service.description)
                        ? service.description[0]
                        : service.description}
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 font-medium group">
                      <span>Learn more</span>
                      <ChevronRight
                        size={18}
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto animate-fadeIn"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            <button
              onClick={handleBack}
              className="mb-8 flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to all services
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  {selectedService.name}
                </h1>
                <div className="mb-6">
                  {Array.isArray(selectedService.description) ? (
                    selectedService.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-lg text-gray-700 mb-2 leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {selectedService.description}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Our Offerings
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.process &&
                      selectedService.process.map((offer, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>{offer}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.benefits &&
                      selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(`/services/${selectedService.name}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Request a Consultation
                  <ChevronRight size={18} className="ml-2" />
                </button>
              </div>

              <div className="md:w-1/2">
                {/* You can add an image or illustration here if your API provides it */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center h-64">
                  <Award className="text-blue-600" size={64} />
                </div>

                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <h3 className="flex items-center text-lg font-semibold mb-3">
                    <Award className="mr-2 text-blue-600" size={20} />
                    Why Choose Our {selectedService.name} Service
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our team of experts uses industry-leading techniques and
                    technologies to deliver exceptional results. We've helped
                    businesses across various industries transform their data
                    operations and unlock new insights.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between border-b pb-2 mb-2">
                      <span className="font-medium">Customer Satisfaction</span>
                      <span className="text-green-600 font-semibold">98%</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2 mb-2">
                      <span className="font-medium">Projects Completed</span>
                      <span className="text-green-600 font-semibold">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Expert Analysts</span>
                      <span className="text-green-600 font-semibold">25+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Service;

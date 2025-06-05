import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Award,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../store/servicesSlice";

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

  // Icon mapping for different service types
  const getServiceIcon = (serviceName, index) => {
    const icons = [Award, Zap, Target, TrendingUp];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={32} className="text-blue-600" />;
  };

  const serviceList = Array.isArray(services) ? services : [];
  console.log("Service List:", serviceList);

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
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                  onClick={() => handleServiceClick(service)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: animateCards
                      ? "fadeInUp 0.6s ease forwards"
                      : "none",
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-blue-50 rounded-full">
                        {getServiceIcon(service.name, index)}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 text-center line-clamp-3 mb-6">
                      {Array.isArray(service.description)
                        ? service.description[0]
                        : service.description}
                    </p>
                    <div className="flex items-center justify-center text-blue-600 font-medium group">
                      <span>Learn more</span>
                      <ChevronRight
                        size={18}
                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl mx-auto animate-fadeIn"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-white hover:text-blue-200 font-medium transition-colors duration-300"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to all services
              </button>

              <div className="flex items-center mb-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-full mr-6">
                  <Award className="text-white" size={40} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    {selectedService.name}
                  </h1>
                  <p className="text-blue-100 text-lg">
                    Professional data solutions tailored to your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                      Service Overview
                    </h2>
                    {Array.isArray(selectedService.description) ? (
                      selectedService.description.map((desc, i) => (
                        <p
                          key={i}
                          className="text-lg text-gray-700 mb-4 leading-relaxed"
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

                  {selectedService.process &&
                    selectedService.process.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <Zap className="mr-2 text-blue-600" size={24} />
                          Our Offerings
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedService.process.map((offer, i) => (
                            <div
                              key={i}
                              className="flex items-start p-4 bg-gray-50 rounded-lg"
                            >
                              <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-gray-700">{offer}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {selectedService.benefits &&
                    selectedService.benefits.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                          <Target className="mr-2 text-blue-600" size={24} />
                          Key Benefits
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedService.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-start p-4 bg-blue-50 rounded-lg"
                            >
                              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h3 className="flex items-center text-lg font-semibold mb-4">
                        <TrendingUp className="mr-2 text-blue-600" size={20} />
                        Why Choose Us
                      </h3>
                      <p className="text-gray-700 mb-6">
                        Our team of experts uses industry-leading techniques and
                        technologies to deliver exceptional results. We've
                        helped businesses across various industries transform
                        their data operations and unlock new insights.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium text-gray-700">
                            Customer Satisfaction
                          </span>
                          <span className="text-green-600 font-bold text-lg">
                            98%
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium text-gray-700">
                            Projects Completed
                          </span>
                          <span className="text-green-600 font-bold text-lg">
                            500+
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium text-gray-700">
                            Expert Analysts
                          </span>
                          <span className="text-green-600 font-bold text-lg">
                            25+
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        navigate(`/services/${selectedService.name}`)
                      }
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Request a Consultation
                      <ChevronRight size={18} className="ml-2" />
                    </button>
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Service;

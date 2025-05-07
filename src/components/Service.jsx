import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Search,
  Zap,
  BarChart2,
  Database,
  Code,
  Image,
  BookOpen,
  Users,
  Lock,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  // List of services with their descriptions and icons
  const services = [
    {
      id: "eda",
      title: "EDA (Exploratory Data Analysis)",
      description:
        "Uncover insights and patterns in your data through statistical analysis, visualization, and interpretation. Our EDA services help you understand data distributions, identify outliers, and discover meaningful relationships.",
      icon: <BarChart2 size={24} />,
      color: "bg-purple-100 text-purple-600",
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "usecase",
      title: "Use Case Building",
      description:
        "Transform business problems into actionable data science projects. We help identify opportunities, frame problems effectively, and design solutions that deliver measurable business value.",
      icon: <Zap size={24} />,
      color: "bg-blue-100 text-blue-600",
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "ml",
      title: "ML Model Development",
      description:
        "Develop custom machine learning models tailored to your specific needs. From regression to neural networks, we build, tune, and deploy high-performance models with explainable results.",
      icon: <Code size={24} />,
      color: "bg-green-100 text-green-600",
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "gathering",
      title: "Data Gathering",
      description:
        "Collect relevant data from various sources including databases, APIs, web scraping, and IoT devices. We handle the complexities of data acquisition to ensure you have quality inputs for your analytics.",
      icon: <Database size={24} />,
      color: "bg-yellow-100 text-yellow-600",
      image:
        "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "cleaning",
      title: "Data Cleaning",
      description:
        "Transform raw data into analysis-ready datasets. Our cleaning services address missing values, outliers, formatting issues, and ensure data consistency and quality.",
      icon: <Lock size={24} />,
      color: "bg-red-100 text-red-600",
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "dashboards",
      title: "Interactive Dashboards",
      description:
        "Create interactive visual interfaces that make your data accessible and actionable. Our custom dashboards provide real-time insights and enable data-driven decision making.",
      icon: <Search size={24} />,
      color: "bg-indigo-100 text-indigo-600",
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "internship",
      title: "Data Science Internship",
      description:
        "Gain practical experience in data science through our structured internship programs. Work on real-world projects under the guidance of experienced professionals.",
      icon: <Users size={24} />,
      color: "bg-pink-100 text-pink-600",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "training",
      title: "Advanced Training",
      description:
        "Enhance your team's data skills through customized training programs. From basic data literacy to advanced machine learning techniques, we offer comprehensive education solutions.",
      icon: <BookOpen size={24} />,
      color: "bg-cyan-100 text-cyan-600",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "cv",
      title: "Computer Vision",
      description:
        "Implement image and video analysis solutions using cutting-edge computer vision techniques. From object detection to facial recognition, we build AI systems that can interpret visual information.",
      icon: <Image size={24} />,
      color: "bg-orange-100 text-orange-600",
      image:
        "https://plus.unsplash.com/premium_photo-1701085328735-d7b663b0499d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [animateCards, setAnimateCards] = useState(true);

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
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
                  onClick={() => handleServiceClick(service)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: animateCards
                      ? "fadeInUp 0.6s ease forwards"
                      : "none",
                  }}
                >
                  <div className="h-40 bg-gray-200 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 left-4 p-2 rounded-lg ${service.color}`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">
                      {service.description}
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
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${selectedService.color}`}
                >
                  {selectedService.icon}
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  {selectedService.title}
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>
                        Customized solutions tailored to your business needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>
                        Expert guidance from experienced data professionals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Fast implementation with measurable results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Ongoing support and knowledge transfer</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(`/services/${selectedService.title}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Request a Consultation
                  <ChevronRight size={18} className="ml-2" />
                </button>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                  <h3 className="flex items-center text-lg font-semibold mb-3">
                    <Award className="mr-2 text-blue-600" size={20} />
                    Why Choose Our {selectedService.title} Service
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

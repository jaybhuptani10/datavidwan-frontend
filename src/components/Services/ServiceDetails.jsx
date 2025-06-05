import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../store/servicesSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Main from "./Main";
import Consultation from "./Consultation";

const ServiceDetails = () => {
  const { service } = useParams();
  const decodedService = decodeURIComponent(service);
  const dispatch = useDispatch();
  const {
    items: services,
    loading,
    error,
  } = useSelector((state) => state.services);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "",
  });

  useEffect(() => {
    if (!services.length) {
      dispatch(fetchServices());
    }
  }, [dispatch, services.length]);

  useEffect(() => {
    if (services.length) {
      // Match by name (API field)
      const foundService = services.find((s) => s.name === decodedService);
      setServiceDetails(foundService);
      if (foundService) {
        setFormData((prev) => ({ ...prev, service: foundService.name }));
      }
    }
  }, [services, decodedService]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        interest: formData.service, // service is the interest
        message: formData.message,
      };
      if (formData.phone) payload.phone = formData.phone;
      if (formData.company) payload.company = formData.company;
      await axios.post("/consult", payload);
      toast.success(
        "Thank you for your consultation request! We will get back to you within 24 hours.",
        { position: "top-center", autoClose: 4000 }
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: serviceDetails?.name || "",
      });
      closeModal(); // Use closeModal to restore scroll
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to submit consultation request. Please try again.",
        { position: "top-center", autoClose: 4000 }
      );
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
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
        <Navigation serviceDetails={serviceDetails} />

        {/* Hero Section */}
        <Hero serviceDetails={serviceDetails} openModal={openModal} />

        {/* Main content */}
        <Main serviceDetails={serviceDetails} openModal={openModal} />
      </div>

      {/* Consultation Modal */}
      {isModalOpen && (
        <>
          <Consultation
            serviceDetails={serviceDetails}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default ServiceDetails;

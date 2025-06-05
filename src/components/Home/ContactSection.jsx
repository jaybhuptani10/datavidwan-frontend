import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!form.subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }

    if (form.name.length < 2) {
      toast.error("Name must be at least 2 characters long");
      return false;
    }

    if (form.subject.length < 3) {
      toast.error("Subject must be at least 3 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await axios.post("/contactus", form);

      toast.success(
        "🎉 Your message has been sent successfully! We'll get back to you soon.",
        {
          position: "top-center",
          autoClose: 4000,
        }
      );

      // Reset form after successful submission
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);

      // Handle different error scenarios
      if (err.response?.status === 400) {
        toast.error(
          err.response.data.message ||
            "Invalid form data. Please check your inputs."
        );
      } else if (err.response?.status === 429) {
        toast.error(
          "Too many requests. Please wait a moment before trying again."
        );
      } else if (err.response?.status >= 500) {
        toast.error("Server error. Please try again later or contact support.");
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else if (err.code === "NETWORK_ERROR" || !err.response) {
        toast.error(
          "Network error. Please check your connection and try again."
        );
      } else {
        toast.error(
          "Failed to send message. Please try again or contact us directly."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneClick = () => {
    // You can add actual phone calling functionality here
    toast.info("📞 Click to call: +91 70169 10523", {
      position: "bottom-center",
      autoClose: 2000,
    });

    // Uncomment below line to actually initiate a phone call on mobile devices
    // window.location.href = "tel:+917016910523";
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            One Stop Solution For All Kind of IT Services
          </h2>
          <p className="text-lg mb-6">
            At Datavidwan, we are dedicated to delivering excellence through
            innovation, expertise, and a commitment to exceeding client
            expectations. Partner with us to harness the power of data and
            transform your business outcomes.
          </p>
          <button
            onClick={handlePhoneClick}
            className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
          >
            📞 +91 70169 10523
          </button>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Fill the Form to Contact us
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your message (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200 disabled:bg-teal-300 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="text-sm"
        bodyClassName="text-gray-800"
      />
    </div>
  );
};

export default ContactSection;

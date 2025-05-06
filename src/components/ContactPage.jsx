import { useState } from "react";
import {
  MessageSquare,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-center text-indigo-900 mb-2">
            DataVidwan
          </h1>
          <p className="text-xl text-center text-indigo-700">
            Your Digital Transformation Partner
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel - Company Info */}
          <div className="w-full lg:w-2/5 bg-indigo-900 text-white p-8 rounded-2xl shadow-xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                One Solution For All Your IT Needs
              </h2>
              <p className="text-indigo-100 mb-8">
                At TechNova, we deliver excellence through innovation,
                expertise, and a commitment to exceeding client expectations.
                Partner with us to harness the power of technology and transform
                your business outcomes.
              </p>

              <div className="bg-indigo-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-indigo-300" />
                    <span>Custom Software Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-indigo-300" />
                    <span>Cloud Solutions & DevOps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-indigo-300" />
                    <span>Data Analytics & AI Implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-indigo-300" />
                    <span>Cybersecurity Services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-800 p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <p>+91 70169 10523</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-800 p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <p>contact@technova.com</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-800 p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <p>Tech Park, Sector 21, Gurugram, India</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <MessageSquare className="text-indigo-600" />
                Fill the Form to Contact Us
              </h2>
              <p className="text-gray-600 mt-2">
                We'll get back to you within 24 hours
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell us more about your project or inquiry..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-blue-800 transition duration-300 shadow-md"
              >
                Submit Request <Send size={18} />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
              <p>
                By submitting this form, you agree to our Privacy Policy and
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

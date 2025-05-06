import React from "react";

const ContactSection = () => {
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
          <p className="text-2xl font-bold">+91 70169 10523</p>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Fill the Form to Contact us
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your message (optional)
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

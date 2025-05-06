import React from "react";
import { useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
const TrainingPage = () => {
  // State for hover effects
  const [hoverState, setHoverState] = useState({
    corporate: false,
    student: false,
  });

  // Counter animation for statistics
  const CounterAnimation = ({ value, label }) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-teal-600 mb-2">{value}</span>
        <p className="text-gray-600 text-center">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen w-full relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
      {/* <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-50 opacity-70"></div> */}
      <div className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-blue-50 opacity-60"></div>

      {/* Header Section */}
      <header className="pt-20 pb-10 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              We provide Corporate trainings as well as Internship to College
              Students
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empower your career with our industry-leading training programs and
            hands-on internship opportunities. Designed for both corporate
            professionals and college students.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 lg:px-8 pb-20">
        {/* Corporate Training and Student Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Corporate Training Card */}
          <div
            className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${
              hoverState.corporate ? "scale-105" : ""
            }`}
            onMouseEnter={() =>
              setHoverState({ ...hoverState, corporate: true })
            }
            onMouseLeave={() =>
              setHoverState({ ...hoverState, corporate: false })
            }
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661587820225-c94b5aa2cc27?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Corporate Training"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoverState.corporate ? "scale-110" : ""
                }`}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">
                  Corporate Training
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Datavidwan, we train your team to excel. Our corporate
                training programs cover the latest in data science, machine
                learning, and AI. With expert-led sessions and hands-on
                experience, we ensure your employees gain practical skills to
                stay competitive.
              </p>
              <div className="flex justify-between items-center">
                <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors">
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
                <span className="text-teal-600 font-medium ml-5 sm:ml-0">
                  Expert-led Training
                </span>
              </div>
            </div>
          </div>

          {/* Student Internship Card */}
          <div
            className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${
              hoverState.student ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoverState({ ...hoverState, student: true })}
            onMouseLeave={() =>
              setHoverState({ ...hoverState, student: false })
            }
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1646369505413-216676fef89c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student Internship"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoverState.student ? "scale-110" : ""
                }`}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">
                  Student Internship
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                We train aspiring professionals through Datavidwan's Student
                Internship program. Gain real-world experience in data science
                and analytics with project-based internships. Learn from
                industry experts, develop essential skills, and build a strong
                professional network for a successful career.
              </p>
              <div className="flex justify-between items-center">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
                  Apply Now
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
                <span className="text-blue-600 font-medium ml-5 sm:ml-0">
                  Project-based Learning
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-10 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Our Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="mb-2 text-teal-500 text-sm font-semibold">
                Over
              </div>
              <CounterAnimation value="500+" label="Corporates Trained" />
            </div>

            <div className="p-4">
              <div className="mb-2 text-teal-500 text-sm font-semibold">
                Over
              </div>
              <CounterAnimation value="30+" label="Companies Associated" />
            </div>

            <div className="p-4">
              <div className="mb-2 text-teal-500 text-sm font-semibold">
                Over
              </div>
              <CounterAnimation value="1000+" label="Students Trained" />
            </div>

            <div className="p-4">
              <div className="mb-2 text-teal-500 text-sm font-semibold">
                Over
              </div>
              <CounterAnimation value="10+" label="Colleges Associated" />
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Why Choose Our Training Programs?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Instructors
              </h4>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience in
                data science and AI applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Hands-on Projects
              </h4>
              <p className="text-gray-600">
                Apply your knowledge through practical, real-world projects that
                build your portfolio.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Networking Opportunities
              </h4>
              <p className="text-gray-600">
                Connect with industry professionals and build valuable
                relationships for your career growth.
              </p>
            </div>
          </div>
        </div>
        {/* Featured Courses Section */}
        <div className="mt-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-10 shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Featured Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Machine Learning Courses */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Machine Learning
              </h4>
              <p className="text-gray-600">15 Courses Available</p>
              <CiCircleChevRight className="absolute right-3 text-4xl bottom-2 " />
            </div>

            {/* Data Analysis Courses */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Data Analysis
              </h4>
              <p className="text-gray-600">23 Courses Available</p>
              <CiCircleChevRight className="absolute right-3 text-4xl bottom-2 " />
            </div>

            {/* Web Development Courses */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Web Development
              </h4>
              <p className="text-gray-600">56 Courses Available</p>
              <CiCircleChevRight className="absolute right-3 text-4xl bottom-2 " />
            </div>

            {/* Mobile App Development Courses */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Mobile App Development
              </h4>
              <p className="text-gray-600">41 Courses Available</p>
              <CiCircleChevRight className="absolute right-3 text-4xl bottom-2 " />
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Enhance Your Skills?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're looking to train your corporate team or seeking
            internship opportunities, we have the right program for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors">
              Corporate Inquiry
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
              Student Application
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrainingPage;

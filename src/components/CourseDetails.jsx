import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book, Clock, Wrench, ChevronRight } from "lucide-react";
import coursesData from "../courses.json";
import Footer from "./Home/Footer";

const CourseDetails = () => {
  const { course } = useParams();
  const decodedCourse = decodeURIComponent(course);
  const [courseDetails, setCourseDetails] = useState(null);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    const foundCourse = coursesData.courses.find(
      (c) => c.title === decodedCourse
    );
    setCourseDetails(foundCourse);
    // Set the first module as active by default
    if (foundCourse && foundCourse.modules && foundCourse.modules.length > 0) {
      setActiveModule(0);
    }
  }, [decodedCourse]);

  if (!courseDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <p className="text-lg text-gray-600">
            The course "{decodedCourse}" does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-8 shadow-lg mb-8">
          {courseDetails.heading && (
            <h1 className="text-4xl font-bold text-white mb-4">
              {courseDetails.heading}
            </h1>
          )}
          {courseDetails.description && (
            <p className="text-lg text-teal-50 max-w-3xl">
              {courseDetails.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              {/* Tools and Technologies */}
              {courseDetails["Tools and Technologies"] && (
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Wrench className="text-teal-600 mr-2" size={20} />
                    <h2 className="text-xl font-bold text-gray-800">
                      Tools & Technologies
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courseDetails["Tools and Technologies"].map(
                      (tool, index) => (
                        <span
                          key={index}
                          className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Module Navigation */}
              {courseDetails.modules && (
                <div>
                  <div className="flex items-center mb-4">
                    <Book className="text-teal-600 mr-2" size={20} />
                    <h2 className="text-xl font-bold text-gray-800">
                      Course Modules
                    </h2>
                  </div>
                  <nav className="space-y-2">
                    {courseDetails.modules.map((module, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveModule(index)}
                        className={`w-full text-left p-3 rounded-lg flex justify-between items-center transition-all ${
                          activeModule === index
                            ? "bg-teal-100 text-teal-800 font-medium"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <span className="truncate">{module.title}</span>
                        <ChevronRight
                          size={16}
                          className={
                            activeModule === index
                              ? "text-teal-600"
                              : "text-gray-400"
                          }
                        />
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {courseDetails.modules && activeModule !== null && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-teal-700 mb-6">
                  {courseDetails.modules[activeModule].title}
                </h2>

                {courseDetails.modules[activeModule].description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">
                      What you'll learn:
                    </h3>
                    <ul className="space-y-3">
                      {courseDetails.modules[activeModule].description.map(
                        (desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="bg-teal-100 rounded-full p-1 mt-1 mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-teal-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700">{desc}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {courseDetails.modules[activeModule].duration && (
                  <div className="flex items-center text-gray-600 mt-4">
                    <Clock size={18} className="mr-2 text-teal-600" />
                    <span>
                      Duration: {courseDetails.modules[activeModule].duration}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;

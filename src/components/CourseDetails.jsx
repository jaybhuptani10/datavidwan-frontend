import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Book,
  Clock,
  DollarSign,
  Monitor,
  Package,
  PlayCircle,
  CheckCircle2,
  Users,
  Star,
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../store/coursesSlice";
import Footer from "./Home/Footer";

const CourseDetails = () => {
  const { course } = useParams();
  const decodedCourse = decodeURIComponent(course);
  const dispatch = useDispatch();
  const {
    items: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);
  const [courseDetails, setCourseDetails] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState(new Set([0]));

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses.length]);

  useEffect(() => {
    if (courses.length) {
      const foundCourse = courses.find((c) => c.title === decodedCourse);
      setCourseDetails(foundCourse);
    }
  }, [courses, decodedCourse]);

  const toggleModule = (index) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedModules(newExpanded);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md border border-red-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Error Loading Course
          </h2>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!courseDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Book className="w-8 h-8 text-gray-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Course Not Found
          </h1>
          <p className="text-gray-600">
            The course "
            <span className="font-semibold text-gray-800">{decodedCourse}</span>
            " does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Course Info */}
              <div className="text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Premium Course</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {courseDetails.heading || courseDetails.title}
                </h1>

                {courseDetails.description && (
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                    {courseDetails.description}
                  </p>
                )}

                {/* Course Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {courseDetails.duration && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <Clock className="w-5 h-5 mr-2 text-blue-200" />
                      <span className="font-medium">
                        {courseDetails.duration} hours
                      </span>
                    </div>
                  )}

                  {courseDetails.mode && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <Monitor className="w-5 h-5 mr-2 text-blue-200" />
                      <span className="font-medium">{courseDetails.mode}</span>
                    </div>
                  )}

                  {courseDetails.price !== undefined && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <DollarSign className="w-5 h-5 mr-2 text-blue-200" />
                      <span className="font-medium">
                        {courseDetails.price === 0
                          ? "Free"
                          : `₹${courseDetails.price}`}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Learning
                  </button>
                  <button className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                    Preview Course
                  </button>
                </div>
              </div>

              {/* Course Image */}
              <div className="lg:text-right">
                {courseDetails.coverImage ? (
                  <img
                    src={courseDetails.coverImage}
                    alt={courseDetails.title}
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:ml-auto rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                ) : (
                  <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:ml-auto h-64 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 flex items-center justify-center">
                    <Book className="w-16 h-16 text-white/60" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            {courseDetails.deliverables &&
              courseDetails.deliverables.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      What You'll Learn
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseDetails.deliverables
                      .filter((d) => d.trim())
                      .map((deliverable, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

            {/* Course Modules */}
            {courseDetails.modules && courseDetails.modules.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Book className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Course Content
                  </h2>
                </div>

                <div className="space-y-4">
                  {courseDetails.modules.map((module, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {module.title}
                            </h3>
                            {module.topics && (
                              <p className="text-gray-600 text-sm">
                                {module.topics.filter((t) => t.trim()).length}{" "}
                                topics
                              </p>
                            )}
                          </div>
                        </div>
                        {expandedModules.has(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {expandedModules.has(index) && (
                        <div className="px-6 pb-6 bg-gray-50">
                          {module.topics &&
                            module.topics.filter((t) => t.trim()).length >
                              0 && (
                              <div className="space-y-3">
                                {module.topics
                                  .filter((t) => t.trim())
                                  .map((topic, topicIndex) => (
                                    <div
                                      key={topicIndex}
                                      className="flex items-center space-x-3 p-3 bg-white rounded-lg border"
                                    >
                                      <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                      <span className="text-gray-700">
                                        {topic}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Deliverables (was Tools & Technologies) */}
              {((courseDetails["Tools and Technologies"] &&
                courseDetails["Tools and Technologies"].length > 0) ||
                (courseDetails.tools && courseDetails.tools.length > 0)) && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Package className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Deliverables
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      courseDetails["Tools and Technologies"] ||
                      courseDetails.tools ||
                      []
                    )
                      .filter((tool) => tool && tool.trim())
                      .map((tool, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium border border-purple-200"
                        >
                          {tool}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {/* Course Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Course Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Students</span>
                    </div>
                    <span className="font-semibold text-gray-800">1,234+</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-gray-600">Rating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-800 mr-1">
                        4.8
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {courseDetails.duration && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-600">Duration</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {courseDetails.duration} hours
                      </span>
                    </div>
                  )}

                  {courseDetails.mode && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Monitor className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-600">Format</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {courseDetails.mode}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Enroll Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {courseDetails.price === 0 ? (
                      "Free"
                    ) : (
                      <span>
                        <span className="inline-block align-middle">₹</span>
                        {courseDetails.price}
                      </span>
                    )}
                  </div>
                  {courseDetails.price > 0 && (
                    <div className="text-blue-200 text-sm mb-4">
                      One-time payment
                    </div>
                  )}
                  <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4">
                    Enroll Now
                  </button>
                  <p className="text-blue-200 text-sm">
                    30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;

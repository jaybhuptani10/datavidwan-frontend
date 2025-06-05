import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../store/coursesSlice";
import { Link } from "react-router-dom";
import { Clock, BookOpen, Star, ArrowRight } from "lucide-react";

const Courses = () => {
  const dispatch = useDispatch();
  const {
    items: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen size={16} />
            Learning Hub
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            All Courses
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help
            you master new skills and advance your career.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-indigo-600 font-medium mt-4">
              Loading courses...
            </p>
          </div>
        ) : error ? (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h3 className="text-red-800 font-semibold text-lg mb-2">
              Error Loading Courses
            </h3>
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length > 0 ? (
              courses.map((course) => (
                <Link
                  key={course._id}
                  to={`/courses/${course.title}`}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:-translate-y-2"
                >
                  {/* Course Icon Header */}
                  <div className="h-24 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <BookOpen className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full"></div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {course.heading || course.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course Meta */}
                    <div className="flex items-center justify-between mb-4">
                      {course.price !== undefined && (
                        <div className="flex items-center gap-1">
                          <span className="text-2xl font-bold text-indigo-600">
                            {course.price === 0 ? "Free" : `₹${course.price}`}
                          </span>
                          {course.price > 0 && (
                            <span className="text-gray-500 text-sm">INR</span>
                          )}
                        </div>
                      )}

                      {course.duration && (
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Clock size={14} />
                          <span>{course.duration} hours</span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                        <span>View Course</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>

                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-gray-600 text-sm">4.8</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full max-w-md mx-auto text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-gray-400" size={32} />
                </div>
                <h3 className="text-gray-900 font-semibold text-xl mb-2">
                  No Courses Available
                </h3>
                <p className="text-gray-600">
                  We're working on adding new courses. Check back soon!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

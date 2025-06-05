import React from "react";
import {
  Award,
  Clock,
  Monitor,
  PlayCircle,
  IndianRupeeIcon,
  Book,
} from "lucide-react";
import Navigation from "../Services/Navigation";
const Hero = ({ courseDetails }) => {
  return (
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
                    <IndianRupeeIcon className="w-5 h-5 mr-2 text-blue-200" />
                    <span className="font-medium">
                      {courseDetails.price === 0
                        ? "Free"
                        : `${courseDetails.price}`}
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
  );
};

export default Hero;

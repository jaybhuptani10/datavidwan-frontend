import React from "react";

const BlogsSection = () => {
  return (
    <div>
      <div className="w-full bg-gray-100 py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Blog Title {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna.
                  </p>
                  <button className="text-teal-500 font-medium hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-teal-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-600 transition">
              View More Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

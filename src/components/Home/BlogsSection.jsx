import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/blogsSlice";
import { useNavigate } from "react-router-dom";

const BlogsSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.items);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);
  console.log(blogs);
  // Fetch blogs if not already loaded
  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs]);

  // Show only the latest 3 blogs
  const recentBlogs = blogs && blogs.length > 0 ? blogs.slice(0, 3) : [];

  return (
    <div>
      <div className="w-full bg-gray-100 py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Latest Blogs
          </h2>
          {loading ? (
            <div className="text-center text-lg text-gray-500 py-10">
              Loading blogs...
            </div>
          ) : error ? (
            <div className="text-center text-lg text-red-500 py-10">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((blog, index) => (
                  <div
                    key={blog._id || blog.id || index}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                  >
                    {blog.images[0] ? (
                      <img
                        src={blog.images[0]}
                        alt={blog.title}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="h-48 bg-gray-300"></div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt ||
                          blog.exerpt ||
                          blog.content?.slice(0, 120) ||
                          "No summary available."}
                      </p>
                      <button
                        className="text-teal-500 font-medium hover:underline"
                        onClick={() =>
                          (window.location.href = `/blog/${blog._id}`)
                        }
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-lg text-gray-400 col-span-3">
                  No blogs found.
                </div>
              )}
            </div>
          )}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/blogs")}
              className="bg-teal-500 text-white font-medium py-2 px-6 cursor-pointer rounded-lg hover:bg-teal-600 transition"
            >
              View More Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

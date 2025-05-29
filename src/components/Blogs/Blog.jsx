import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogsSlice";

// Helper function to get a blog by ID
export const getBlogById = (blogs, id) => {
  return blogs.find((blog) => blog.id === id || blog.id === parseInt(id));
};

const Blog = () => {
  const dispatch = useDispatch();
  const {
    items: blogPosts,
    loading,
    error,
  } = useSelector((state) => state.blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Extract unique categories for the filter
  const categories = [
    "All",
    ...new Set((blogPosts || []).map((post) => post.category)),
  ];

  // Filter blogs based on search term and category
  const filteredBlogs = (blogPosts || []).filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-30">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Our Blog</h1>
        <p className="text-gray-600 text-center mb-8">
          Insights, tutorials, and updates from our team
        </p>

        {/* Create Blog button */}
        <div className="flex justify-end mb-6">
          <Link
            to="/blogs/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Blog
          </Link>
        </div>

        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:w-48">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(
                (category, index) =>
                  category !== "All" && (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  )
              )}
            </select>
          </div>
        </div>

        {/* Loading and error states */}
        {loading && (
          <div className="text-center py-8 text-blue-600 font-semibold">
            Loading blogs...
          </div>
        )}
        {error && (
          <div className="text-center py-8 text-red-600 font-semibold">
            {error}
          </div>
        )}

        {/* Blog listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && !error && filteredBlogs.length > 0
            ? filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm font-semibold text-blue-600">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold mt-2 mb-3 text-gray-800">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        By {blog.author}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                  </div>
                </Link>
              ))
            : !loading &&
              !error && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-medium text-gray-600">
                    No blog posts found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
        </div>

        {/* My Blogs link */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs/my"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View My Blogs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample blog data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and build your first component.",
    author: "Jane Smith",
    date: "May 15, 2025",
    coverImage:
      "https://images.unsplash.com/photo-1747599309107-20504ba6b8dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    excerpt:
      "Dive deep into CSS Grid, Flexbox, and animations for modern web design.",
    author: "John Doe",
    date: "May 10, 2025",
    coverImage:
      "https://images.unsplash.com/photo-1747396379098-714c21bde6f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "CSS",
  },
  {
    id: 3,
    title: "State Management in React Apps",
    excerpt:
      "Compare different state management solutions for React applications.",
    author: "Alex Johnson",
    date: "May 5, 2025",
    coverImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "React",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    excerpt:
      "Tips and tricks for creating websites that look great on any device.",
    author: "Sarah Williams",
    date: "April 28, 2025",
    coverImage:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UI Design",
  },
];

// You could export this for use in other components that need blog data
export const getBlogPosts = () => blogPosts;
export const getBlogById = (id) =>
  blogPosts.find((blog) => blog.id === parseInt(id));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique categories for the filter
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter blogs based on search term and category
  const filteredBlogs = blogPosts.filter((blog) => {
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

        {/* Blog listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
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
          ) : (
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

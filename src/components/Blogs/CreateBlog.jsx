import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RTE from "../RTE";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    coverImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        coverImage: file,
      });

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call with a delay
    try {
      // In a real app, you would send formData to your backend
      console.log("Submitting blog post:", formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to the blogs page after successful submission
      navigate("/myblogs");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Web Development",
    "CSS",
    "React",
    "UI Design",
    "JavaScript",
    "Backend",
    "DevOps",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Create New Blog Post</h1>
            <Link to="/blogs" className="text-blue-600 hover:text-blue-800">
              Cancel
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Enter blog title"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="excerpt"
                className="block text-gray-700 font-medium mb-2"
              >
                Excerpt *
              </label>
              <input
                type="text"
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Brief summary of your blog post"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="coverImage"
                className="block text-gray-700 font-medium mb-2"
              >
                Cover Image *
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {previewImage && (
                <div className="mt-2">
                  <img
                    src={previewImage}
                    alt="Cover preview"
                    className="h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium mb-2"
              >
                Content *
              </label>
              {/* <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="10"
                required
                placeholder="Write your blog post content here"
              ></textarea> */}
              <RTE
                value={formData.content}
                onChange={(content) => handleInputChange({ target: { name: "content", value: content } })}
              />

            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
                    Publishing...
                  </span>
                ) : (
                  "Publish Blog Post"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

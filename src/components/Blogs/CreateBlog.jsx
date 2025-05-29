import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RTE from "../RTE";
import axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    exerpt: "",
    content: "",
    images: [], // Changed to support multiple images
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      setFormData({
        ...formData,
        images: files,
      });

      // Create preview URLs for all selected images
      const previewPromises = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(previewPromises).then(setPreviewImages);
    }
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      images: newImages,
    });
    setPreviewImages(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create FormData to handle file uploads
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("content", formData.content);
      submitData.append("category", formData.category);
      submitData.append("exerpt", formData.exerpt);

      // Append images if any
      formData.images.forEach((image) => {
        submitData.append("images", image);
      });

      // Use axios for the request
      const response = await axios.post("/blog", submitData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(
          response.data?.message || `HTTP error! status: ${response.status}`
        );
      }

      const result = response.data;
      console.log("Blog post created successfully:", result);

      // Redirect to the blogs page after successful submission
      navigate("/blogs");
    } catch (error) {
      console.error("Error creating blog post:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to create blog post. Please try again."
      );
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
    "Mobile Development",
    "Data Science",
    "AI/ML",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Create New Blog Post
            </h1>
            <Link
              to="/blogs"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Blogs
            </Link>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              <p className="font-medium">Error:</p>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="Enter an engaging blog title"
              />
            </div>

            {/* Category */}
            <div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

            {/* Excerpt */}
            <div>
              <label
                htmlFor="exerpt"
                className="block text-gray-700 font-medium mb-2"
              >
                Excerpt *
              </label>
              <textarea
                id="exerpt"
                name="exerpt"
                value={formData.exerpt}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                required
                placeholder="Write a compelling summary of your blog post (150-300 characters recommended)"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.exerpt.length} characters
              </p>
            </div>

            {/* Images */}
            <div>
              <label
                htmlFor="images"
                className="block text-gray-700 font-medium mb-2"
              >
                Images (Optional)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                You can select multiple images. Supported formats: JPG, PNG,
                GIF, WebP
              </p>

              {/* Image Previews */}
              {previewImages.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Image Previews:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {previewImages.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-gray-700 font-medium mb-2"
              >
                Content *
              </label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <RTE
                  value={formData.content}
                  onChange={(content) =>
                    handleInputChange({
                      target: { name: "content", value: content },
                    })
                  }
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Use the rich text editor to format your content with headings,
                lists, links, and more.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
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

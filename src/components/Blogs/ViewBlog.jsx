import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/blogsSlice";

const ViewBlog = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);
  const blogsLoading = useSelector((state) => state.blogs.loading);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let foundBlog = null;
    if (Array.isArray(blogs)) {
      foundBlog = blogs.find(
        (b) => b._id === blogId || b.id === blogId || b.id === parseInt(blogId)
      );
    }
    if (foundBlog) {
      setBlog(foundBlog);
      setLoading(false);
    } else if (!blogsLoading) {
      // If not found and not already loading, fetch blogs
      dispatch(fetchBlogs());
      setLoading(false); // Will re-render when blogs update
    } else {
      setLoading(blogsLoading);
    }
  }, [blogId, blogs, blogsLoading, dispatch]);

  // Redirect or show message if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login to view this blog post.");
    }
  }, []);

  const handleSubmitComment = (e) => {
    e.preventDefault();

    // Validate form
    if (!name.trim() || !email.trim() || !newComment.trim()) {
      alert("Please fill all fields");
      return;
    }

    // In a real app, this would be an API call to save the comment
    const newCommentObj = {
      id: comments.length + 1,
      name: name,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      content: newComment,
      avatar: "/api/placeholder/50/50",
    };

    setComments([...comments, newCommentObj]);

    // Reset form
    setNewComment("");
    setName("");
    setEmail("");
    setShowCommentForm(false);
  };

  if (error === "Please login to view this blog post.") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Please Login
          </h2>
          <p className="text-gray-600 mb-6">
            You must be logged in to view this blog post.
          </p>
          <Link
            to="/auth"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link
            to="/blogs"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <Link
            to="/blogs"
            className="mb-6 inline-block text-blue-600 hover:text-blue-800"
          >
            &larr; Back to all blogs
          </Link>

          <img
            src={blog.images[0]}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div>
            <span className="text-sm font-semibold text-blue-600">
              {blog.category}
            </span>
            <h1 className="text-3xl font-bold mt-2 mb-4">{blog.title}</h1>

            <div className="flex items-center justify-between py-4 border-y border-gray-200 mb-8">
              <span className="text-gray-600">By {blog.author}</span>
              <span className="text-gray-600">{blog.date}</span>
            </div>

            <div className="prose max-w-none">
              <p>{blog.content}</p>

              {/* Key Takeaways Section */}
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Important point about this blog topic</li>
                <li className="mb-2">
                  Another crucial insight from the article
                </li>
                <li className="mb-2">
                  Final takeaway that readers should remember
                </li>
              </ul>

              {/* Share Article Section */}
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Facebook
                  </button>
                  <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6">
                  Comments ({comments.length})
                </h2>

                {/* Display Comments */}
                {comments.length > 0 ? (
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={comment.avatar}
                          alt={`${comment.name}'s avatar`}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{comment.name}</h4>
                            <span className="text-sm text-gray-500">
                              {comment.date}
                            </span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic mb-8">
                    No comments yet. Be the first to comment!
                  </p>
                )}

                {/* Add Comment Button */}
                {!showCommentForm && (
                  <button
                    onClick={() => setShowCommentForm(true)}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Add a Comment
                  </button>
                )}

                {/* Comment Form */}
                {showCommentForm && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Leave a Comment
                    </h3>
                    <form onSubmit={handleSubmitComment}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email * (will not be published)
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="comment"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Comment *
                        </label>
                        <textarea
                          id="comment"
                          rows="4"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Submit Comment
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowCommentForm(false)}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;

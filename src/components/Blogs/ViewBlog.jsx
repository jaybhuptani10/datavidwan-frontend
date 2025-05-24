import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "./Blog";

const ViewBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    // Simulate fetching blog data with a short delay
    const fetchBlog = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        // For now, we're using our local data function
        const blogData = getBlogById(blogId);

        // Add a delay to simulate network request
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (blogData) {
          setBlog({
            ...blogData,
            content: `This is the full content of the blog post about ${blogData.title}. In a real application, this would be fetched from a database or API.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          });

          // Simulate fetching comments
          setComments([
            {
              id: 1,
              name: "John Doe",
              date: "May 15, 2025",
              content:
                "Great article! I really enjoyed reading this perspective.",
              avatar:
                "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              id: 2,
              name: "Jane Smith",
              date: "May 16, 2025",
              content:
                "This was very informative. I'd love to see a follow-up article that explores this topic in more depth.",
              avatar:
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

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
            src={blog.coverImage}
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

import React from "react";
import { useNavigate } from "react-router-dom";

const BlogDetail = ({ blog }) => {
  console.log(blog.image)
  const navigate = useNavigate();

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-50 ">
        <p className="text-xl font-medium text-yellow-900">No blog selected. Please go back and select a blog.</p>
      </div>
    );
  }

  return (
    <div className=" p-6 bg-yellow-50 mt-17">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-yellow-300 overflow-hidden">
        <div className="relative h-64 w-full">
          <img
            src={
              blog.image || "/placeholder.jpg"}
            alt={blog.mainHeading}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-6 bg-yellow-100">
          <h1 className="text-2xl font-bold text-yellow-900 mb-4">{blog.mainHeading}</h1>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">{blog.subHeading}</h2>
          <p className="text-yellow-700 text-sm mb-4">{blog.description}</p>
          <p className="text-base leading-relaxed text-yellow-800 mb-6">{blog.content}</p>
          <button
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-yellow-50 py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

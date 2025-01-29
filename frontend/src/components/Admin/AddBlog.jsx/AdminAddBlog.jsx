import React, { useState } from "react";

const AdminAddBlog = () => {
  const [formData, setFormData] = useState({
    mainHeading: "",
    subHeading: "",
    description: "",
    content: "",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      mainHeading: "",
      subHeading: "",
      description: "",
      content: "",
      image: null,
      imagePreview: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "imagePreview") {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch("http://localhost:3000/api/admin/addBlog", {
        method: "POST",
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error("Failed to add blog. Please try again.");
      }

      alert("Blog added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("An error occurred while adding the blog. Please try again later.");
    }
  };

  return (
    <div className="bg-yellow-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-yellow-800 mb-6 text-center">
        Add a Historical Blog
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/** Input Field Component */}
        {[
          { label: "Main Heading", name: "mainHeading", type: "text" },
          { label: "Sub Heading", name: "subHeading", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="space-y-2">
            <label htmlFor={name} className="block text-yellow-900 font-semibold">
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full p-3 border border-yellow-400 rounded-md focus:ring focus:ring-yellow-300 focus:outline-none"
            />
          </div>
        ))}

        {/** Textarea Field Component */}
        {[
          { label: "Description", name: "description", rows: 3 },
          { label: "Content", name: "content", rows: 5 },
        ].map(({ label, name, rows }) => (
          <div key={name} className="space-y-2">
            <label htmlFor={name} className="block text-yellow-900 font-semibold">
              {label}
            </label>
            <textarea
              id={name}
              name={name}
              rows={rows}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full p-3 border border-yellow-400 rounded-md focus:ring focus:ring-yellow-300 focus:outline-none"
            ></textarea>
          </div>
        ))}

        {/** Image Upload */}
        <div className="space-y-2">
          <label htmlFor="image" className="block text-yellow-900 font-semibold">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-yellow-400 rounded-md focus:ring focus:ring-yellow-300 focus:outline-none"
            required
          />
          {formData.imagePreview && (
            <div className="mt-4">
              <p className="text-yellow-800 font-medium">Image Preview:</p>
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="mt-2 w-full max-h-64 object-cover border border-yellow-400 rounded-md"
              />
            </div>
          )}
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-700 text-white py-3 rounded-md hover:bg-yellow-800 focus:ring focus:ring-yellow-300 focus:outline-none"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AdminAddBlog;

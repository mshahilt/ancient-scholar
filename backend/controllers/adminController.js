const Blog = require("../models/blogSchema");


const addBlog = async (req, res) => {
  try {
    const { mainHeading, subHeading, description, content } = req.body;
    const imagePath = req.file.path;
    const newBlog = new Blog({
      mainHeading,
      subHeading,
      description,
      content,
      image: imagePath, 
    });

    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating blog", error: error.message });
  }
};



module.exports = { addBlog };
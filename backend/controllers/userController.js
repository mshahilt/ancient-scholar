const Blog = require("../models/blogSchema");


exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        console.log(blogs);
        res.status(200).json({ blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}
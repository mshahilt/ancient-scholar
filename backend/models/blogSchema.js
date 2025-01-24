const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  mainHeading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

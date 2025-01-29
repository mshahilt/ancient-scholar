import React from 'react'
import BlogDetail from '../../components/Blog/BlogDetail';
import { sampleBlog } from '../../data/blogData';
import Navbar from '../../components/Navbar/Navbar';

const Blog = () => {
  return (
    <>
        <Navbar />
        <BlogDetail blog={sampleBlog}/>
    </>
  )
}

export default Blog

import React, { useEffect,useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import History from '../../components/ReadHistory/History';
import BlogGrid from '../../components/Blog/BlogGrid';
import HomeOptions from '../../components/Options/HomeOptions';
import { options } from '../../data/homeOptions';

const UserHome = () => {
  
const [posts, setPosts] = useState([])


useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user/getBlogs')
      const data = await response.json()

      setPosts(data.blogs)
    } catch (error) {
      console.log(error)
    }
  }

  fetchPosts()
}, [])
console.log(posts)
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeOptions options={options} />
      <History />
      <BlogGrid posts={posts}/>
    </div>
  )
}

export default UserHome

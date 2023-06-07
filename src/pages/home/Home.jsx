import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import  './home.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

function Home() {
  const [posts,setPosts]= useState([])
  const {search}= useLocation()

  useEffect(()=>{
const fetchPosts= async()=>{
  const res = await axios.get("https://advanced-blog-app.onrender.com/api/posts"+ search)
 setPosts(res.data)
}
fetchPosts();
  },[])

  return (
    <>
      <Header />
    <div className='home'>
      <Posts posts={posts}/>  
     

    </div>
      <Footer />
    </>
  )
}

export default Home

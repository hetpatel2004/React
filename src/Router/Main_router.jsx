import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Components/Index'
import About from '../Components/About'
import Blog from '../Components/Blog'
import Home from '../Components/Home'
function Main_router() {
  return (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>

    </Routes>
)
}

export default Main_router
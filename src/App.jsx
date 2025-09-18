import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

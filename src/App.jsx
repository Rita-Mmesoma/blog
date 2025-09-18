import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

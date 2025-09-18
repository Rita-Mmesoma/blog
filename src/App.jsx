import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/blog/Blog'
import { Toaster } from 'react-hot-toast'
import BlogDetails from './pages/blog/BlogDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  )
}

export default App

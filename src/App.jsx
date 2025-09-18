import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from './components/Blogs'
import BlogDetails from './components/BlogDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  )
}

export default App

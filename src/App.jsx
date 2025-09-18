import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './components/Home'
import Blogs from './components/Blogs'

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
      </Routes>
      
    </div>
  )
}

export default App

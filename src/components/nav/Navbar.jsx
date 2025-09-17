import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const showSearch = () => {
        setOpen(!open)
    }

  return (
    <div className='flex justify-between items-center bg-black/90 text-gray-400 px-3 h-[10vh]'>

      <ul className='about flex gap-2 items-center justify-center h-full'>
        <li><Link  to ="/"  className='hover:text-white'>HOME</Link></li>
        <p>|</p>
        <li><Link  to ="/blog" className='hover:text-white'>BLOG</Link></li>
        <p>|</p>
        <li><Link  to ="/about" className='hover:text-white'> ABOUT</Link></li>
      </ul>

      <div className='flex justify-center items-center  h-full px-2 w-[40%]'>
        <input type="text" placeholder='search' className={`outline-none w-[90%]  py-2 text-[18px] ${open ? 'block' : 'hidden'}`} />
        <IoSearchOutline className=' font-bold  text-[30px] cursor-pointer' onClick={showSearch} />
      </div>

      <div className='flex text-2xl gap-3'>
        <Link><FaTwitterSquare className='text-blue-500' /></Link>
        <Link><FaLinkedin className='text-blue-600' /></Link>
        <Link to='https://www.facebook.com' className=''><FaFacebookSquare className='text-blue-700 ' /></Link>
      </div>
    </div>
  )
}

export default Navbar

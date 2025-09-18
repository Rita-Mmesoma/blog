import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [search, setSearch] = useState('')
    console.log(search)

    const showSearch = () => {
        setOpen(!open)
    }
    const showMenu = () => {
      setOpenMenu(!openMenu)
    }

  return (
    <div className='flex flex-row-reverse md:flex-row justify-between items-center bg-black/90 text-gray-400 px-3 h-[10vh] w-full'>

      <div className='flex md:hidden'>
        <RxHamburgerMenu onClick={showMenu} className='hover:cursor-pointer text-[22px]' />
      </div>

      <ul className={` md:flex md:flex-row flex-col gap-2 items-center justify-center h-full ${openMenu ? ' w-[100%] bg-pink-400  h-[100vh]' : 'hidden'} `}>
        <li><Link className='hover:text-white' to='/'>HOME</Link></li>
        <p className='hidden md:block'>|</p>
        <li><Link className='hover:text-white' to='/blog'>BLOG</Link></li>
        <p className='hidden md:block'>|</p>
        <li><Link className='hover:text-white' to='/about'>ABOUT</Link></li>
      </ul>

      <div className='flex flex-row-reverse md:flex-row ju md:justify-center items-center  h-full px-2 md:w-[40%]'>

        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search' className={`bg-gray-700 md:bg-none rounded-sm outline-none w-[90%] py-1 pl-0.5  md:py-2 text-[18px] ${open ? 'block' : 'hidden'}`} />
        <IoSearchOutline className=' font-bold text-[22px]  md:text-[30px] cursor-pointer' onClick={showSearch} />
      </div>

      <div className='hidden text-2xl gap-3 md:flex'>
        <Link to='https://x.com/'><FaTwitterSquare className='text-blue-500' /></Link>
        <Link to='https://www.linkedin.com/login'><FaLinkedin className='text-blue-600' /></Link>
        <Link to='https://www.facebook.com' className=''><FaFacebookSquare className='text-blue-700 ' /></Link>
      </div>
    </div>
  )
}

export default Navbar

import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'

const Blogs = ({search}) => {
    const [blog, setBlog] = useState(null)
    console.log('search', search)

    useEffect(() =>{
        fetch('https://jsonfakery.com/blogs')
            .then((res) =>{
                return res.json()
            })
            .then((data) =>{
                setBlog(data)
            })
    },[])
  return (

    <section className='flex flex-col justify-center w-full'>
        {/* {blog && blog.map((blogs) => (
            <div key={blogs.id}>
                <p>{blogs?.category}</p>
            </div>
        ))} */}

        <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] gap-6 justify-center'>


      {blog && blog.map((blogs) => (

        <div key={blogs.id} className='  '>
            <img src={blogs.featured_image || 'city.avif'}  alt="blog image" className='w-full h-[30vh] object-cover' />

            <div className='border-1 border-gray-500 flex flex-col justify-center items-center pt-5'>
                <div className='flex items-center w-[90%] gap-2 mb-2'>
                    <img src={blogs?.user?.profile_pic || 'city.avif'} alt="profile picture" className='w-12.5 h-12.5 object-cover rounded-full' />
                    <div className='text-[14px]'>
                        <p className='font-bold'>{blogs.user.first_name} {blogs.user.last_name}</p>
                        <p>{blogs.user.updated_at} . 1 min read</p>
                    </div>
                </div>

                <p className='text-2xl w-[90%] hover:cursor-pointer hover:text-blue-400 line-clamp-2'>{blogs.title}</p>

                <div className='flex justify-between w-[90%] mt-5 py-3 border-t-1 border-gray-500 '>

                    {/* category */}
                    <div className='items-center w-[50%] line-clamp-1 '>{blogs?.user?.role}</div>

                    <div className='flex items-center gap-5'>

                        {/* views */}
                        <div className='flex items-center gap-2'><FaRegMessage /> {Math.round(Math.random() * 1000)}</div>

                        {/* comments */}
                        <div className='flex items-center gap-2'> <FaRegHeart className='text-red-500' /> {Math.round(Math.random() * 100)}</div>
                    </div>
                    
                </div>
            </div>
        </div>

        
      ))}
    </div>
    </section>
  )
}

export default Blogs

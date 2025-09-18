import { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Loading from './loading/Loading'

const BlogPreview = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchDate = () => {
       try{
            setLoading(true)
            fetch('https://jsonfakery.com/blogs')
                .then((res) => res.json())
                .then((data) => {
                    setBlogs(data.slice(0, 3)) // Take only the first 3 posts
                    setLoading(false)
                })
       }catch(error){
        setError("An Error Occured")
        setLoading(false)
       }
    }
    useEffect(() =>{
        fetchDate()
    },[])
    
  return (
    <section className='flex flex-col justify-center w-full items-center my-10'>
        {error ? (<div className='text-2xl text-red-600 flex justify-center items-center'>An Error Occured</div>) : 
        (loading ? (<Loading />) : (
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] gap-6 justify-center'>
                {Array.isArray(blogs) && blogs.map((blog) => (
                    <div key={blog.id} className=''>
                        <img src={blog.featured_image || 'city.avif'}  alt="blog image" className='w-full h-[30vh] object-cover' />
                        <div className='border-1 border-gray-500 flex flex-col justify-center items-center pt-5'>
                            <div className='flex items-center w-[90%] gap-2 mb-2'>
                                <img src={blog?.user?.profile_pic || 'city.avif'} alt="profile picture" className='w-12 h-12 object-cover rounded-full' />
                                <div className='text-[14px]'>
                                    <p className='font-bold'>{blog.user.first_name} {blog.user.last_name}</p>
                                    <p className='text-gray-600'>{blog.user.updated_at} . 1 min read</p>
                                </div>
                            </div>
                            <Link to={`/blog/${blog.id}`}><p className='text-2xl w-[90%] hover:text-blue-400 line-clamp-2'>{blog.title}</p></Link>
                            <div className='flex justify-between w-[90%] mt-5 py-3 border-t-1 border-gray-500 '>
                                <div className='items-center w-[50%] line-clamp-1 text-gray-600'>{blog?.category}</div>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-2'><FaRegMessage /> {Math.round(Math.random() * 1000)}</div>
                                    <div className='flex items-center gap-2'> <FaRegHeart className='text-red-500' /> {Math.round(Math.random() * 100)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))}
        <div className="mt-8 text-center">
            <Link to="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View All Blogs
            </Link>
        </div>
    </section>
  )
}

export default BlogPreview

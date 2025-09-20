import { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { categories } from '../../components/Files'
import Loading from '../../components/loading/Loading'
import useFetch from '../../useFetch'
import { motion } from 'framer-motion'

const Blog = () => {
    const API_url = import.meta.env.VITE_API_URL
    const { data, loading, error} = useFetch(API_url)
    const [category, setCategory] = useState(null)
    
    
    const showAllCategories = () => {
        if(data){
            setCategory(data)
            console.log("items", category)
        }
    }
    useEffect(() =>{
        showAllCategories()
    },[data])
    

    const handleCategory = (categoryName) => {
        
        const newCategory = data.filter((data) => data.category === categoryName )
        setCategory(newCategory)
    }
    // 👇 animation variants
    const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }
    
  return (

    <section className='flex flex-col justify-center w-full items-center mb-5'>
        {error ? (<div className='text-2xl text-red-600 flex justify-center items-center'>An Error Occured</div>) : 
        (loading ? (<Loading />) : (<>
                <div className='my-5 flex flex-wrap md:w-[80%] justify-center gap-3 text-gray-600 [&>p]:border [&>p]:px-3 [&>p]:py:1 [&>p]:rounded-full [&>p]:hover:cursor-pointer [&>p]:hover:bg-black/90 [&>p]:hover:text-white '>
                <p onClick={() => showAllCategories()}>All</p>
                {categories && categories.map((category, i) => (
                    <p key={i} onClick={() => handleCategory(category)}>{category}</p>
                ))}
            </div>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] gap-6 justify-center'>


        {Array.isArray(category) && category?.map((blogs, i) => (

            <motion.div key={blogs.id} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}>
                <Link to={`/blog/${blogs.id}`} ><img src={blogs.featured_image || 'city.avif'}  alt="blog image" className='w-full h-[30vh] object-cover' /></Link>

                <div className='border-1 border-gray-500 flex flex-col justify-center items-center pt-5'>
                    <div className='flex items-center w-[90%] gap-2 mb-2'>
                        <img src={blogs?.user?.profile_pic || 'city.avif'} alt="profile picture" className='w-12.5 h-12.5 object-cover rounded-full' />
                        <div className='text-[14px]'>
                            <p className='font-bold'>{blogs.user.first_name} {blogs.user.last_name}</p>
                            <p className='text-gray-600'>{blogs.user.updated_at} . 1 min read</p>
                        </div>
                    </div>

                    <Link to={`/blog/${blogs.id}`} className='text-2xl w-[90%] hover:text-blue-400 line-clamp-2'><p >{blogs.title}</p></Link>

                    <div className='flex justify-between w-[90%] mt-5 py-3 border-t-1 border-gray-500 '>

                        {/* category */}
                        <div className='items-center w-[50%] line-clamp-1 text-gray-600'>{blogs?.category}</div>

                        <div className='flex items-center gap-5'>

                            {/* views */}
                            <div className='flex items-center gap-2 cursor-pointer'><FaRegMessage /> {Math.round(Math.random() * 1000)}</div>

                            {/* comments */}
                            <div className='flex items-center gap-2 cursor-pointer'> <FaRegHeart className='text-red-500' /> {Math.round(Math.random() * 100)}</div>
                        </div>
                        
                    </div>
                </div>
            </motion.div>

            
        ))}
        </div>
            </>)
         )}
        {/* {blog && blog.map((blogs) => (
            <div key={blogs.id}>
                <p>{blogs?.category}</p>
            </div>
        ))} */}
    </section>
  )
}

export default Blog

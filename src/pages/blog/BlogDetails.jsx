import React from 'react'
import {  Link, useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
import Loading from '../../components/loading/Loading'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';

const BlogDetails = () => {
  const { id } = useParams()
  const API_url = import.meta.env.VITE_API_URL
  const { data, loading, error} = useFetch(`${API_url}` )

  const fetchedItem = data?.find(item => item.id === id)
  
  // Define animation properties
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2, // Add a slight delay for a smoother effect
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

  const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}
    

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* <p>{blog.title}</p> */}
      { loading && <div><Loading /></div>}
      { error && <div className='text-2xl text-red-600 flex justify-center items-center'>An Error Occured</div>}
      { data &&  (
        <motion.article
        className='my-5 w-[90%]'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
         >

          <Link to="/blog" className='flex items-center w-[80px] mb-10 text-gray-600 border px-3 py:1 rounded-full hover:cursor-pointer hover:bg-black/90 hover:text-white '><IoIosArrowBack /> Back</Link>

          <motion.div
          className='flex items-center gap-2 '
          variants={childVariants}
          >

            <img src={fetchedItem?.user?.profile_pic} alt="profile picture" className='w-12.5 h-12.5 object-cover rounded-full' />

            <p className='font-bold'>{fetchedItem?.user?.first_name} {fetchedItem?.user?.last_name} . </p>

            <p className='text-gray-600'>{fetchedItem?.user?.updated_at} . 1 min read</p>

          </motion.div>

          <motion.h1
          className=' uppercase text-3xl/10 font-bold mb-3 '
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          >{fetchedItem?.title}</motion.h1>

          <motion.p
          className='text-[18px] mb-5'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          >{fetchedItem?.subtitle}</motion.p>

          <motion.img src={fetchedItem?.featured_image || 'city.avif'}  alt="blog image" className='w-full h-[50vh] md:h-[60vh] object-cover'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
           />
          <motion.div
          className='mt-5 [&>h1]:text-2xl [&>h1]:mb-3 [&>p]:text-[17px] [&>p]:mb-2.5 [&>blockquote]:font-bold [&>blockquote]:mb-2.5 [&>blockquote]:text-[20px] [&>blockquote]:w-[80%] '
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          dangerouslySetInnerHTML={{__html:fetchedItem?.main_content}}></motion.div>
          
        </motion.article>
      )}
    </div>
  )
}

export default BlogDetails

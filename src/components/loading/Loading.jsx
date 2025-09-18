import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] gap-x-2'>
        <div className='animate-bounce h-6 w-6 bg-black/90 rounded-full '></div>
        <div className='animate-bounce h-6 w-6 bg-gray-600 rounded-full '></div>
        <div className='animate-bounce h-6 w-6 bg-black/90 rounded-full '></div>
    </div>
  )
}

export default Loading

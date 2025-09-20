import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
        const fetchDate = () => {
           try{
                setLoading(true)
                fetch(url)
                    .then((res) =>{
                        console.log("res", res)
                        return res.json()
                    })
                    .then((data) =>{
                        setData(data.slice(0, 30))
                        setLoading(false)
                        // console.log("response: ", data)
                    })
           }catch(error){
            console.log("Response was not JSON:", error.message);
            setError("An Error Occured")
            setLoading(false)
           }
        }
        useEffect(() =>{
            fetchDate()
        },[url])

  return { data, loading, error}
}

export default useFetch

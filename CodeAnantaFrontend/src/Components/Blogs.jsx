import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BlogPage from './BlogPage';

export default function Blogs() {

  const [Blog, setBlog] = useState([]);
  const [seletedBlog, setSelectedBlog] = useState(null);

  useEffect(()=>{

    axios.get("http://localhost:8081/api/all")
    .then(response =>{
      console.log(response.data);
      // console.log("Hi");
      setBlog(response.data.Data);
    })
    .catch(error =>{
      console.log(error);
    })
    
  

  },[])


  const handleSelection = (data)=>{
    setSelectedBlog(data);
  }
  


  return (
    <>

      {
        seletedBlog ? (
            <BlogPage seletedBlog={seletedBlog}/>
        )
        :
        (

        <div className=' flex flex-row justify-center gap-3'>
        {
            Blog.length ? 
            (
              Blog.map((blog) =>(
                <div className='flex justify-center w-xs items-center mt-10' id={blog.id}>

                  <div className='flex flex-col items-center p-3 gap-2 rounded-sm bg-gray-900'>
                        <img 
                        src="https://placehold.co/600x400" 
                        alt="blog photo"
                        className='w-xs'
                        />
                      <h1 className='text-xl'>{blog.title}</h1>
                      <p className='text-gray-500 text-sm'>created at : {blog.createdAt}</p>
                      <p className='text-sm text-gray-300 '>{blog.content.slice(0,30)} .....</p>
                      <button 
                        onClick={()=> handleSelection(blog)}
                        className='bg-purple-400 cursor-pointer hover:bg-purple-600 w-full rounded-sm text-white p-2 '
                      >Read more</button>
                  </div>
                  
                </div>
              ))
            )
            :
            (
              BlogPage ? <p></p> : <p>No Blog found</p>
        
            )
          }
        </div>

      )}

    
    </>
  )
}

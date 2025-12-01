import React from 'react'
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';

export default function BlogPage({seletedBlog}) {


    console.log(seletedBlog);
    
  return (
    <div className='flex flex-col p-10 justify-center items-center'> 
            <div className='link flex gap-5  w-4/5 underline text-gray-300 '>
                <Link to="/" >Home <span>-</span></Link>
            </div>

            <div className='blog-page mt-10 flex justify-center gap-10 items-center flex-col'>
                <img src={seletedBlog.thumbnailUrl} alt="" />
                <h1 className='text-4xl'>{seletedBlog.title}</h1>
                <p className='text-sm w-4/5'>{seletedBlog.content}</p>

            </div>

            <div className='create-at text-gray-400 flex justify-between w-4/5 mt-20 items-center'>
                <p>Created At : {seletedBlog.createdAt}</p>
                <button className='text-sm bg-purple-400 text-white p-2 rounded-sm text-center cursor-pointer hover:bg-purple-600'><ShareIcon/> Share</button> 
            </div>
    
    </div>

  )
}

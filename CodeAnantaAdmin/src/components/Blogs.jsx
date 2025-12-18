
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PostPopup from './PostPopup';
import toast, {Toaster} from 'react-hot-toast'
import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';

function Blogs() {

  const [selectedPopup, setSelectedPopup] = useState(false);
  const [Blog, setBlog] = useState([]);
  const [deletePopup, setDeletePopup] = useState(false);
  const [blogId, setBlogId] = useState();


  useEffect( () =>{

    const fetchBlogs = async () =>{

        try
        {
            const res = await axios.get("http://localhost:8081/api/all");
            console.log(res);

            setBlog(res.data.Data);

            toast("Connected", {
                icon:'🤘',
                style:{
                    color:"white",
                    background:"purple"
                }
            })
        }
        catch(error)
        {
            console.log(error);
        } 
    }

    fetchBlogs();
    

  },[deletePopup])


  const handleBlogId = (id) =>{
        setBlogId(id);
        setDeletePopup((prev) => !prev);
  }

  
  const deleteBlog = async () =>{

    try
    {
        const res = await axios.delete(`http://localhost:8081/api/delete/${blogId}`)

        setDeletePopup((prev) => !prev);

        console.log(res);
        

        toast("Connected", {
            icon:'🤘',
            style:{
                color:"white",
                background:"purple"
            }
        })
    }
    catch(error)
    {
        console.log(error);
    }

  }
  


  return (
    <>
        <div className='blog-container flex flex-col items-center gap-10 justify-center mt-10'>
            <div className='blog-container w-2/3 flex justify-between items-center'>
                <h1 className='text-xl'>Blogs</h1>
                <button
                    onClick={() => setSelectedPopup((prev) => !prev)}
                    className='bg-purple-500 items-center p-2 rounded-sm cursor-pointer hover:bg-purple-700'
                ><AddIcon/>Add Blog</button>
            </div>

            <div className='all-blog flex  w-2/3 flex-col gap-5'>
                {

                    Blog.length ?
                    (
                            Blog.map((blog)=>(
                            <div className='flex p-5 items-center justify-between bg-gray-900 rounded-sm gap-5' key={blog.id}>
                                <p className=' text-gray-400'>{blog.id}</p>
                                <h2 className=''>{blog.title}</h2>
                                <p className='text-gray-400'>{blog.createdAt}</p>

                                <div className='button h-fit flex gap-10 justify-end items-end'>
                                    <div className='flex w-xs justify-end  gap-10'>
                                        <button className='cursor-pointer flex gap-2 items-center p-2 bg-purple-600'>
                                            <UpdateIcon fontSize='medium'></UpdateIcon>Update
                                        </button>
                                        <button 
                                            className='cursor-pointer flex gap-2 h-fit p-2 bg-purple-600'
                                            onClick={() =>handleBlogId(blog.id)}
                                        >
                                            <DeleteForeverIcon fontSize='medium'></DeleteForeverIcon>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                    :
                    (
                        <p>Don't have data</p>
                    )
                    
                }
            </div>

            {
                selectedPopup ? <PostPopup setSelectedPopup={setSelectedPopup} /> : <p></p>
            }

            {
                deletePopup ? 
                (
                    <div className=' absolute flex gap-5 rounded-sm p-2 w-1/3 backdrop-blur-2xl flex-col'>
                        <div    
                            className='flex items-end justify-end'
                            onClick={() => setDeletePopup((prev)=>!prev)}
                        >
                            <CancelIcon></CancelIcon>
                        </div>

                        <div className='flex justify-center gap-1 items-center flex-col'>
                            <p className='text-6xl'>😒</p>
                            <p>Are you sure!</p>
                        </div>
                        <div className='rounded-sm p-2 flex hover:bg-purple-700 justify-center font-semibold bg-purple-600'>
                            <button 
                                className='cursor-pointer'
                                onClick={deleteBlog}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
                :
                (
                    <p></p>
                )
            }

        </div>

        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    </>
  )
}

export default Blogs
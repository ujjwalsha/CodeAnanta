
import './App.css'
import React, { useState } from 'react'

import Home from './Components/Home'
import NavBar from './Components/NavBar'
import CloseIcon from '@mui/icons-material/Close';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Course from './Components/Courses/Course';


function App() {
   const [searchBoxOpened, setSearchBoxOpened] = useState(false);

   const router = createBrowserRouter([
    {
        path:"/",
        element: <><NavBar searchBoxOpened={searchBoxOpened} setSearchBoxOpened={setSearchBoxOpened}/><Home/><Footer/></>
    },
    {
        path:"/Blogs",
        element: <><NavBar searchBoxOpened={searchBoxOpened} setSearchBoxOpened={setSearchBoxOpened} /><Blogs/><Footer/></>
    },
    {
        path:"/Courses",
        element:<><NavBar searchBoxOpened={searchBoxOpened} setSearchBoxOpened={setSearchBoxOpened} /><Course/><Footer/></>
    }
   ])


  return (
    <>
      <div>

          <RouterProvider router={router}/>
      </div>

        {
            searchBoxOpened ?
            (
                <div 
                    onClick={()=> setSearchBoxOpened((prev) => !prev)}
                    className='search-Container absolute top-0 backdrop-blur-sm w-full h-screen flex justify-center items-center rounded-sm'
                >
                    
                    <div className='border-[0.1px] border-gray-600 absolute bg-black  flex flex-col justify-center items-center w-fit rounded-sm'>
                        <div className='w-full items-end relative flex justify-between p-3 '>
                            <p className='font-semibold'>Search</p>
                            <button 
                                className='bg-gray-900 p-1 rounded-sm'
                                onClick={() => setSearchBoxOpened((prev) => !prev)}
                            >
                                <CloseIcon fontSize='2'></CloseIcon>
                            </button>

                        </div>
                    
                        <div className='search-bar p-10 flex flex-col gap-2'>
                            <input 
                                type="" 
                                className='text-sm border rounded-sm  bg-gray-900 p-2 w-xs' 
                                placeholder='Search......'   
                            />
                            <div className=' flex text-sm gap-2'>
                                <p className=' rounded-sm p-1 '>All</p>
                                <p className='rounded-sm p-1 '>Courses</p>
                                <p className='rounded-sm p-1 '>Blogs</p>
                            </div>

                            <div className='search-container p-10'>
                                <p className='text-gray-500'>Type at least 2 Characters to search</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            )
            :
            (
                <p></p>
            )

        }
     
    </>
  )
}

export default App

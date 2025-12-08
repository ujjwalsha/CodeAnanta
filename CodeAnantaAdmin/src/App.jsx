import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Course from './components/Courses/Course';

function App() {
  

  const route = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>   
    },
    {
      path:"/Blogs",
      element:<><Navbar/><Blogs/></>
    },
    {
      path:"/Courses",
      element:<><Navbar/><Course/></>
    }
  ])

  return (
    <>
      <RouterProvider router={route} /> 
    </>
  )
}

export default App

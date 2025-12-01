import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
        <div className='container relative bg-black backdrop-blur-xl  flex justify-center items-center mt-5 gap-5'>
            <Link to="/" className='font-semibold  text-2xl'>Code<span className='text-purple-400'>Ananta</span> <span className='border p-1 text-xl text-gray-500'>Admin</span></Link>
            <div className='menu flex gap-8 justify-evenly items-center'>
                <Link to="/" className='hover:bg-gray-900 p-2 rounded-2xl'>Home</Link>
                <Link to="/Courses" className='hover:bg-gray-900 p-2 rounded-2xl'>Courses</Link>
                <Link to="/Tutorials" className='hover:bg-gray-900 p-2 rounded-2xl'>Tutorials</Link>
                <Link to="/Blogs" className='hover:bg-gray-900 p-2 rounded-2xl'>Blogs</Link>
                <Link to="/Notes" className='hover:bg-gray-900 p-2 rounded-2xl'>Notes</Link>
                <Link to="/Contact" className='hover:bg-gray-900 p-2 rounded-2xl'>Contact</Link>
            </div>

            {/* <div className='search-bar relative'>
                    <input 
                        type="text" 
                        onClick={() => setSearchBoxOpened((prev) => !prev)}
                        className='bg-gray-900 text-sm p-2 w-2xs rounded-sm'
                        placeholder='Search....'

                    />
                    <div className='shortcut absolute flex items-center gap-1 border-[0.2px] rounded-sm bg-black p-1 top-1 right-1'>
                        <WindowIcon fontSize='2'></WindowIcon>
                        <p className='font-bold text-sm'>K</p>
                    </div>
            </div> */}

            <div className='auth-section flex gap-3'>
                    <button className='rounded-sm cursor-pointer bg-purple-400 text-sm p-2'>Login</button>
                    <button className='rounded-sm cursor-pointer text-sm p-2 bg-gray-900'>SignUp</button>
            </div>

        </div>
    </>
  )
}

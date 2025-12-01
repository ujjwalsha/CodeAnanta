import React from 'react'
import Chart from './Chart'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 items-center mt-10'>
        <div className='chart-container w-2/3'>
            <Chart/>
        </div>

        <div className='stats-container flex justify-center gap-3 items-center'>
           
             <div className='blog-counter  flex justify-center gap-3 items-center flex-col  bg-gray-900 p-5 '>
                <h1 className='text-4xl text-gray-400'>123K</h1>
                <p className=''>Number of Tutorials</p>
            </div>


            <div className='blog-counter  flex justify-center gap-3 items-center flex-col  bg-gray-900 p-5 '>
                <h1 className='text-4xl text-gray-400'>12K</h1>
                <p className=''>Number of Tutorials</p>
            </div>

            <div className='blog-counter  flex justify-center gap-3 items-center flex-col  bg-gray-900 p-5 '>
                <h1 className='text-4xl text-gray-400'>30K</h1>
                <p>Number of Courses</p>
            </div>

            <div className='blog-counter flex justify-center gap-3 items-center flex-col  bg-gray-900 p-5'>
                <h1 className='text-4xl text-gray-400'>20K</h1>
                <p>Number of Student</p>
            </div>
        </div>
        
    </div>
  )
}

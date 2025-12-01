import React from 'react'

export default function Home() {
  return (

    <>
      <div className='Home-container mt-5'>
        <div className='relative main-poster flex flex-col  '>
            <img src="./src/assets/FrontPage.jpg" className='h-screen' alt="" />
            <div className='absolute backdrop-blur-xl h-screen flex flex-col justify-center items-center w-full'>
               <div className='w-5xl gap-10 top-6 flex flex-col justify-center items-center'>
                    <p className='p-2 bg-gray-400 w-fit text-black rounded-sm font-semibold'>Learn Code right way</p>
                    <p className='text-5xl font-semibold'>Code <span className='text-purple-400'>Ananta</span> | Learn, Build, Innovate</p>
                    <p className='text-xl text-center'>Welcome to CodeAnanta - a platform dedicated to empowering developers with practical coding tutorials, web development tips, and real-world projects. Whether you're a beginner or an experienced programmer, we help you learn, build, and innovate with confidence.</p>
                </div>
            </div>
        </div>
     </div>

      <div className='bg-gray-900'>
            <p>this is content section</p>
      </div>
    </>
    
  )
}

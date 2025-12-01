import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-gray-900 font-normal gap-10 p-10 mt-10 flex flex-col w-full justify-center items-center'>
            <div className='flex w-full justify-evenly items-center gap-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Main</h1>
                <a href="/Home" className='text-sm'>Home</a>
                <a href="/Contact" className='text-sm'>Contact</a>
                <a href="/work" className='text-sm'>Work With Us</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Learn</h1>
                <a href="/coursera">Coursera</a>
                <a href="/Tutorials">Tutorials</a>
                <a href="/Notes">Notes</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Legal</h1>
                <a href="/terms" className='text-sm'>Terms</a>
                <a href="/privacy" className='text-sm'>Privacy</a>
                <a href="/Refund" className='text-sm'>Refund</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>Social</h1>
                <a href="/Home" className='text-sm'>Github</a>
                <a href="/Contact" className='text-sm'>Twitter(X)</a>
                <a href="/work" className='text-sm'>Youtube</a>
            </div>
            </div>
            
            <p>Made with 💖 and ☕ in India</p>
            
        </div>

        
    </>
  )
}

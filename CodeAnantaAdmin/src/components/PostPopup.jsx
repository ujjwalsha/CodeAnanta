import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function PostPopup({setSelectedPopup}) {
  return (
    <div className='absolute top-20  w-1/2 gap-10 backdrop-blur-2xl transparent flex flex-col justify-center items-center rounded-sm p-5'>
        <div className='cut flex items-end  w-full justify-end'>
            <button
                onClick={() => setSelectedPopup((prev) => !prev)}
                className='bg-purple-500 rounded-sm'
            >
            <CancelIcon/>
            </button>
        </div>

        <div className='  w-2/3 flex justify-center items-center flex-col gap-3'>   

             <div className='input  w-full p-2 '>
                 <p className=''>Title</p>
                 <input type="text" className='rounded-sm bg-gray-900 p-2 w-full' placeholder='Title...........' />
            </div>

            <div className='content w-full p-2'>
                <p>Description</p>
                <textarea name="" id="" className=' rounded-sm bg-gray-900 p-2 w-full' placeholder='Write Description'></textarea>
            </div>


            
        </div>

        <div className='submit w-1/2'>
            <button className='bg-purple-500 p-2 rounded-sm w-full'>submit</button>
        </div>

    </div>
  )
}

export default PostPopup
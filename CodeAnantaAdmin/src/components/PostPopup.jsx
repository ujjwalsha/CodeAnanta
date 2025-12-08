import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function PostPopup({setSelectedPopup}) {

    const [selectedFile, setSelectedFile] = useState(null);


    const handleUpload = (event) =>{
        setSelectedFile(event.target.file[0]);
    }

  return (
    <div className='absolute top-20  w-2/3 border-[.1px] border-purple-900 gap-10 backdrop-blur-2xl transparent flex flex-col justify-center items-center rounded-sm p-5'>
        <div className='cut flex items-end cursor-pointer  w-full justify-end'>
            <button
                onClick={() => setSelectedPopup((prev) => !prev)}
                className='bg-purple-500 cursor-pointer rounded-sm'
            >
            <CancelIcon/>
            </button>
        </div>


        <div className='flex gap-5 flex-col w-full'>
            <div className=' w-full flex justify-center items-center flex-col gap-3'>   
                <div className='input  w-full p-2 '>
                    <p className=''>Title</p>
                    <input type="text" className='rounded-sm bg-gray-900 p-2 w-full' placeholder='Title...........' />
                </div>

                <div className='content w-full p-2 '>
                    <p>Description</p>
                    <textarea name="" id="" className=' rounded-sm h-50 bg-gray-900 p-2 w-full' placeholder='Write Description'></textarea>
                </div>
            </div>

            <div className='border-purple-900 border-[.1px] w-fit '>
                <input 
                    type="file" 
                    className='p-2'
                    onChange={handleUpload}
                />
            </div>
        </div>

        

        <div className='submit w-1/2'>
            <button className='bg-purple-500 p-2 rounded-sm w-full'>submit</button>
        </div>

    </div>
  )
}

export default PostPopup
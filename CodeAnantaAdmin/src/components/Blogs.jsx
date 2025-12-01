
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import PostPopup from './PostPopup';

function Blogs() {

    const [selectedPopup, setSelectedPopup] = useState(false);


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

            <div className='all-blog border'>
                <div className=''>
                    <h1>
                        title
                    </h1>
                </div>
            </div>

            {
                selectedPopup ? <PostPopup setSelectedPopup={setSelectedPopup} /> : <p></p>
            }

        </div>
    </>
  )
}

export default Blogs
import React from 'react'
import turf from '../assets/turf.jpg'

function EditTurf() {
  return (
    <div className=' p-5 bg-gray-100 w-full h-screen flex items-center justify-center'>
      <div className='h-full w-full p-3'>
        <div className=''>
          <div>
            <h1 className='text-center text-3xl'>Edit Turf</h1>
          </div>
          <div>
            <img src={turf} alt="image not found" className='h-60 w-60 rounded-md'/>
          </div>
          <form className='mt-5 p-3 absolute left-[700px] top-20'>
            <div>
              <input type="text" placeholder="Edit Turf Name" className="rounded-md w-96 h-10 placeholder:text-center" />
            </div>
            <div className='mt-5'>
              <input type="text" placeholder="Edit Location" className="rounded-md w-96 h-10 placeholder:text-center" />
            </div>
            <div className='mt-5'>
              <input type="text" placeholder="Edit Price" className="rounded-md w-96 h-10 placeholder:text-center" />
            </div>
            <div className='mt-5'>
              <textarea rows='5' type="text" placeholder="Edit Description" className="rounded-md w-96  placeholder:text-center" />
            </div>
            <div className='mt-5'>
              <input type="submit" value="Save" className="rounded-md p-2 h-10 bg-green-500 placeholder:text-center" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditTurf

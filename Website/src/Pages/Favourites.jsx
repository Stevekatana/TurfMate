import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

function Favourites() {
    const navigate = useNavigate()

    function backToListing(){
        navigate('/listing')
    }
  return (
    <div>
        <div className='p-3 text-center mt-3 border-b-2'>
            <div className='absolute top-6 lg:left-[250px] left-5'>
                <IoArrowBack className='text-3xl' onClick={backToListing}/>
            </div>
            <h1 className='text-3xl font-semibold'>My Favourites</h1>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Favourites

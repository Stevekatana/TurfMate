import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link,useNavigate, useParams } from 'react-router-dom';
import turf from '../assets/turf.jpg'
import { useEffect } from 'react';
import  Axios  from 'axios';



function ViewListing() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    Axios.get('http://localhost:5000/turfs/getData/'+id)
      .then(res=>{
        res = res.data
        setData(res)
      })
      .catch(err => console.log(err))
  },[])
  
  function backHome(){
      navigate('/listing')
  }
  return (
    <div className='lg:h-full bg-red-500'>
      <section className='lg:border-b-gray-300 lg:border-b-2' > 
        <div className='absolute top-6 left-6 '>
          <IoArrowBack className='text-3xl' onClick={backHome}/>
        </div>
        <div className='flex items-center justify-center mt-[70px] lg:justify-start lg:p-3 lg:w-[500px]'>
            <img src={turf} alt="image not found" className='w-80 rounded-md lg:ml-[90px]'/>
            <div className='absolute top-[300px] lg:top-[180px] lg:left-[500px] lg:text-4xl'>
              <h1 className='text-3xl text-center font-semibold uppercase'>{data.turfName}</h1>
            </div>
        </div>
      </section>

      {/* details section */}
      <section className='lg:flex lg:items-center lg:justify-center bg-gray-200 lg:h-full'>
        <div className='lg:flex lg:justify-evenly lg:items-center lg:p-0 lg:w-[700px]'>

          <div className=' text-center font-semibold lg:p-0 lg:w-[800px] lg:h-full rounded-md bg-white mt-2'>
            <h3>Description:</h3>
            <p className='mt-1 text-center font-normal'>{data.turfDescription}</p>
          </div>

          <div className='bg-white'>
            <table>
              <thead>
                <th>Date</th>
                <th>time</th>
              </thead>
              <tbody>
                <tr></tr>

              </tbody>
            </table>
          </div>


          <div className='text-center mt-10 lg:ml-10 p-2 lg:mt-0 lg:w-[400px] lg:h-auto rounded-md bg-white'>
            <div>
              <span className='font-semibold'>Location:</span>
              <span>{data.turfLocation}</span>
            </div>
            <div className='mt-2'>
              <span className='font-semibold'>Price:</span>
              <span>{data.turfPrice} kshs</span>
            </div>

            <div className='mt-2 flex items-center justify-center rounded-full'>
              <span className='font-semibold'>Availability:</span>
              <div className='h-5 w-5 bg-red-500 ml-5 rounded-[99px]'></div>
            </div>
          </div>
        </div>
      </section>

      <div className='flex items-center justify-center mt-3 mb-2'>
        <Link to={`/booking/${data._id}`} className='bg-navBack text-awesome p-2 rounded-md'>Book Turf</Link>
      </div>
    </div>
  )
}

export default ViewListing

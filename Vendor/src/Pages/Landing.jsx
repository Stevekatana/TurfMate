import React from 'react'
import { useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Landing() {
  const [landingData, setLandingData] = useState({})
  useEffect(()=>{
    fetchOwnerData()
  },[])
  
  async function fetchOwnerData(){
    try{
      const token = localStorage.getItem("ownerToken")
      let response = await Axios.get('http://localhost:5000/owner/profile', {headers: {Authorization: `Bearer ${token}`}})
      response = response.data
      if (response) {
        setLandingData(response)
      } else {
        console.error("No data found in response")
      }
    }
    catch(error){
      console.error("Error fetching owner data", error);
    }
  }
  return (
    <div className=' p-5 bg-gray-100 w-full h-screen'>
      <div>
        <h1 className='text-3xl'>Welcome Back, {landingData.ownerFirstName}</h1>
      </div>
      
      {/* Bookings */}
      <div className='bg-white p-3 rounded-md mt-8 h-64 '>
        <div className='ml-5'>
          <h3 className='text-xl'>Bookings</h3>
        </div>
        <div className='ml-5 mt-4 pb-3'>
          <ul>
            <li className='bg-gray-800 p-1 rounded-md'>
              <Link>
                <h2 className='text-white'><b>Steve</b> made a Booking at 777 turf</h2>
                <p className='text-gray-500'>Tap for more details</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Messages */}
      <div className='bg-white p-3 rounded-md mt-8 h-72'>
        <div className='ml-5'>
          <h3 className='text-xl'>Messages</h3>
        </div>
        <div className='ml-5 mt-4 pb-3 overflow-y-scroll'>
          <ul>
            <li className='bg-gray-800 p-1 rounded-md'>
              <Link>
                <h2 className='text-white'><b>Steve</b> made a Booking</h2>
                <p className='text-gray-500'>Tap to View</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Landing

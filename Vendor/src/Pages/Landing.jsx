import React from 'react'
import { useState, useEffect} from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
const socket = io('http://localhost:5000')

function Landing() {
  const [landingData, setLandingData] = useState({})
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    checkLogin()
    fetchOwnerData()
    loadBookings()

    socket.on("connect", () => {
      console.log(`Owner has connected to socket with id: ${socket.id}`);
    });

    return () => {
      socket.off("connect");
    };
 },[])

  function checkLogin(){
    const token = localStorage.getItem("ownerToken")
    if(!token){
      navigate('/login')
    }else{
      fetchOwnerData()
    }
  }
  
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

  async function loadBookings(){
    const token = localStorage.getItem('ownerToken')
    await Axios.get('http://localhost:5000/booking/mybookings', {headers:{Authorization:`Bearer ${token}`}})
      .then(res=>{
        res = res.data
        setBookings(res)
      })
      .catch(err => console.log(err))
  }

  return (

    <div className=' p-5 bg-gray-100 w-full h-screen'>
      <div>
        <h1 className='text-3xl'>Welcome Back, {landingData.ownerFirstName}</h1>
      </div>
      
      {/* Bookings */}
      <div className='bg-white p-3 rounded-md mt-8 h-[300px] '>
        <div className='ml-5'>
          <h3 className='text-xl'>Bookings</h3>
        </div>
          <ul className='ml-5 mt-4 pb-1 overflow-y-scroll h-[230px]'>
            {
              bookings.map((bookings)=>{
                return(
                  <li className='bg-gray-800 p-1 rounded-md mb-2' key={bookings._id}>
                    <Link>
                      <h2 className='text-white'><b>{bookings.bookerName}</b> made a Booking at {bookings.turfNAME}</h2>
                      <Link to='/bookings' className='text-gray-500'>Tap for more details</Link>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
      </div>

      {/* Messages */}
      <div className='bg-white p-3 rounded-md mt-8 h-1/2'>
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

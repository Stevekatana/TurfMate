import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'

function Bookings() {
    const [bookingData, setBookingData] = useState([])

    useEffect(()=>{
        fetchMyBookings()
    },[])

    function fetchMyBookings(){
        const token = localStorage.getItem("ownerToken")
        Axios.get('http://localhost:5000/booking/mybookings', {headers:{Authorization:`Bearer ${token}`}})
            .then(res =>{
                res = res.data
                setBookingData(res)
            })
            .catch(err =>console.log(err))

            // TODO:Render the acquired data
    }

  return (
    <div className=' p-5 bg-gray-100 w-full h-screen flex items-center justify-center'>
        <div className='bg-gray-200 w-2/3 h-full rounded-md p-3'>
            <div className='text-center p-3 mt-3'>
                <h1 className='font-semibold text-4xl'>My Bookings</h1>
            </div>
            <div className='h-[800px] flex justify-center pt-5 overflow-y-scroll'>
                <ul className=''>
                    {
                        bookingData.map((bookingData)=>{
                            return(
                                <li className='bg-slate-400 p-3 w-[700px] rounded-md mb-4' key={bookingData.id}>
                                    <div className='text-center p-1'> 
                                        <span className='font-semibold uppercase text-2xl'>{bookingData.bookerName}</span>
                                        <span className='ml-1 text-2xl'>made a booking at:</span>
                                        <span className='ml-2 font-semibold uppercase text-2xl'>{bookingData.turfNAME}</span>
                                    </div>
                                    <div className=' flex items-center justify-around mt-5'>
                                        <div>
                                            <span className='text-xl font-semibold'>Squad name:</span>
                                            <span className='ml-2 text-xl'>{bookingData.squadName}</span>
                                        </div>
                                        <div>
                                            <span className='text-xl font-semibold'>Duration:</span>
                                            <span className='ml-2 text-xl'>{bookingData.bookingDuration} hr(s)</span>
                                        </div>
                                    </div>
                                    <div className=' flex items-center justify-around mt-5'>
                                        <div>
                                            <span className='text-xl font-semibold'>Date:</span>
                                            <span className='ml-2 text-xl'>{bookingData.bookDate}</span>
                                        </div>
                                        <div>
                                            <span className='text-xl font-semibold'>Time:</span>
                                            <span className='ml-2 text-xl'>{bookingData.bookTime} </span>
                                        </div>
                                    </div>
                                    <div className=' mt-5 flex items-center justify-center'>
                                        <div>
                                            <div>
                                                <span className='text-xl font-semibold'>Location:</span>
                                                <span className='ml-2 text-xl'>{bookingData.bookLocation}</span>
                                            </div>
                                            <div className='mt-2'>
                                                <span className='font-semibold text-gray-500 text-lg'>Serial number:</span>
                                                <span className='ml-2 text-lg text-gray-500'>{bookingData.bookingSerialNo}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Bookings

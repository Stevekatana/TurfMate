import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
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

    }

  return (
    <div className=' p-5 bg-gray-100 w-full h-screen flex items-center justify-center'>
        <div className='bg-gray-200 w-2/3 h-full rounded-md p-3'>
            <div className='text-center p-3 mt-3'>
                <h1 className='font-semibold text-4xl'>My Bookings</h1>
            </div>
            {/* sorting section */}
            

            <div className='h-[700px] w-full overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='bg-gray-500 sticky top-0'>
                        <th className='p-5 h-7'>Date</th>
                        <th className='p-5 h-7'>Client</th>
                        <th className='p-5 h-7'>Squad Name</th>
                        <th className='p-5 h-7'>Start Time</th>
                        <th className='p-5 h-7'>End Time</th>
                    </thead>
                    <tbody className='mt-5'>
                        {
                            bookingData.map((bookingData)=>{
                                return(
                                    <tr key={bookingData._id} className='text-center lg: lg:h-12 border-b-2 border-b-black border-b-solid mt-2 mb-2'>
                                        <td>{bookingData.bookDate}</td>
                                        <td>{bookingData.bookerName}</td>
                                        <td>{bookingData.squadName}</td>
                                        <td>{bookingData.startTime}</td>
                                        <td>{bookingData.endTime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Bookings

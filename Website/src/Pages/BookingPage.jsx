import React, { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

function BookingPage() {
    const navigate = useNavigate()
    const [bookerName, setBookerName] = useState('')
    const [squadName, setSquadName] = useState('')
    const [bookingDate, setBookingDate] = useState('')
    const [bookingDuration, setBookingDuration] = useState('')

    function backHome(){
        navigate('/listing')
    }

    function handleBooking(e){
        e.preventDefault()
        const adjustedBookingDate = new Date(new Date(bookingDate).getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
        Axios.post('http://localhost:5000/booking/new', { bookerName, squadName, bookingDate: adjustedBookingDate, bookingDuration })
            .then(res=>{
                alert('Booking made succesfully') 
                               
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <section className='flex items-center justify-center'>    
            <div className='absolute top-6 left-6 '>
                <IoArrowBack className='text-3xl' onClick={backHome}/>
            </div>
            <div className='text-center mt-[23px] text-2xl lg:text-4xl'>
                <h1>777 recreational center</h1>
            </div>
        </section>
        <section className='flex items-center justify-center mt-20 w-auto'>
            <form onSubmit={handleBooking} className='p-3 rounded-md shadow-md '>
                <div className='p-2 mb-3'>
                    <input type="text" required onChange={(e)=>{setBookerName(e.target.value)}} placeholder='Enter your name' className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <input type="text" required onChange={(e)=>{setSquadName(e.target.value)}} placeholder='Enter your Squad name' className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <input type="datetime-local" required onChange={(e)=>{setBookingDate(e.target.value)}} placeholder='Select Date' className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <input type="text" required onChange={(e)=>{setBookingDuration(e.target.value)}} placeholder="Duration of play" className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>

                <div className='flex items-center justify-center'>
                    <input type="submit" value='Submit form' className='bg-navBack text-awesome p-2  lg:rounded-md'/>
                </div>
            </form>
        </section>
    </div>
  )
}

export default BookingPage

import React, { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

function BookingPage() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [squadName, setSquadName] = useState('')
    const [bookDate, setBookDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
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

    function handleBooking(e){
        e.preventDefault()
        const token = localStorage.getItem("token")

        // const adjustedBookingDate = new Date(new Date(bookingDate).getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
        // let[bookDate,bookTime] = adjustedBookingDate.split("T")
        // let [hrs, mins] = bookTime.split(":")
        // bookTime = `${hrs}:${mins}`

        Axios.post('http://localhost:5000/booking/new/'+id, {squadName, bookDate, startTime, endTime}, {headers: {Authorization:`Bearer ${token}`}})
            .then(res =>{
                console.log(res)
                navigate('/viewlisting/'+id)
            })
            .catch(err =>console.log(err))
    }

  return (
    <div>
        <section className='flex items-center justify-center'>    
            <div className='absolute top-6 left-6 '>
                <IoArrowBack className='text-3xl' onClick={backHome}/>
            </div>
            <div className='text-center mt-[23px] text-2xl lg:text-4xl uppercase'>
                <h1>{data.turfName}</h1>
            </div>
        </section>
        <section className='flex items-center justify-center mt-20 w-auto'>
            <form onSubmit={handleBooking} className='p-3 rounded-md shadow-md '>
                <div className='p-2 mb-3 lg:flex-col'>
                    <label className="mr-4">Enter your name:</label>
                    <input type="text" required onChange={(e)=>{setSquadName(e.target.value)}} placeholder='Enter your Squad name' className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <label className="mr-4">Pick the date:</label>
                    <input type="date" required onChange={(e)=>{setBookDate(e.target.value)}} placeholder='Select Date and time' className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <label className="mr-4">Pick start time:</label>
                    <input type="time" required onChange={(e)=>{setStartTime(e.target.value)}} className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
                </div>
                <div className='p-2 mb-3'>
                    <label className="mr-4">Pick end time:</label>
                    <input type="time" required onChange={(e)=>{setEndTime(e.target.value)}}  className='h-10 w-72 shadow-md placeholder:text-center lg:w-[500px] lg:rounded-md'/>
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

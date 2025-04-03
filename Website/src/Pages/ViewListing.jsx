import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link,useNavigate, useParams } from 'react-router-dom';
import turf from '../assets/turf.jpg'
import { useEffect } from 'react';
import  Axios  from 'axios';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import io from 'socket.io-client'
const socket = io('http://localhost:5000')


function ViewListing() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [turfBookings, setTurfBookings] = useState([])
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [click, setClick] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    Axios.get('http://localhost:5000/turfs/getData/'+id)
      .then(res=>{
        res = res.data
        setData(res)
      })
      .catch(err => console.log(err))

      socket.on('newBooking', (info)=>{
        console.log(info)
      })
      
      fetchTurfbookings()
      renderDate()
  },[])

  async function fetchTurfbookings(){
    await Axios.get('http://localhost:5000/turfs/bookings/'+id)
    .then(res =>{
      res = res.data
      setTurfBookings(res)
    })
    .catch(err =>console.log(err))
  }
  
  function backHome(){
      navigate('/listing')
  }

  function renderDate(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date().toLocaleDateString();
    let day = weekday[new Date().getDay()];

    console.log(day, date)

    setDate(date)
    setDay(day)
  }

  return (
    <div className='lg:h-full '>
      <section className='lg:border-b-gray-300 lg:border-b-2' > 
        <div className='absolute top-6 left-6 '>
          <IoArrowBack className='text-3xl' onClick={backHome}/>
        </div>
        <div className='flex items-center justify-center mt-[70px] lg:justify-start lg:p-3 lg:w-[500px]'>
            <img src={turf} alt="image not found" className='w-80 rounded-md lg:ml-[200px]'/>
            <div className='absolute top-[300px] lg:top-[180px] lg:left-[600px] lg:text-5xl'>
              <h1 className='text-3xl text-center font-semibold uppercase'>{data.turfName}</h1>
            </div>
        </div>
        <div className='flex items-center justify-center mt-3 mb-2 w-auto p-2 '>
          <Link to={`/booking/${data._id}`} className='bg-navBack text-center h-10 text-awesome p-2 rounded-md w-60'>Book Turf</Link>
          {/* <FaHeart className='text-3xl ml-5'/> */}
          <FaRegHeart className='text-3xl ml-5'/>
        </div>
      </section>

      {/* details section */}
      <section className='lg:flex lg:items-center lg:justify-center bg-gray-200 lg:h-[400px]'>
        <div className='lg:flex lg:justify-evenly lg:items-center lg:p-5 lg:w-[700px] lg:h-full'>

          <div className='text-center font-semibold lg:w-[500px] lg:h-full rounded-md bg-white lg:-ml-[400px]'>
            <h3 className='text-2xl lg:mt-7 underline'>Description:</h3>
              <p className='mt-10 w-[500px] text-center font-normal text-xl'>{data.turfDescription}</p>
          </div>

          <div className='bg-white lg:ml-4 p-3 lg:rounded-md lg:h-full'>
            <div className='flex items-center justify-center'>
              <h1 className='text-2xl lg:mt-3 font-semibold underline'>Bookings made: {day} - {date}</h1>
            </div>
            <table className='lg:w-[500px] p-10 lg:mt-2 rounded-md overflow-y-scroll lg:h-10'>
              <thead className=''>
                <th className='border-black border-2 border-solid'>Date</th>
                <th className='border-black border-2 border-solid'>Squad Name</th>
                <th className='border-black border-2 border-solid'>Start Time</th>
                <th className='border-black border-2 border-solid'>End Time</th>
              </thead>
              <tbody className='border-black border-2 border-solid'>
                {
                  turfBookings.map((turfBookings)=>{
                    return(
                      <tr className='text-center p-20  bg-slate-500' key={turfBookings._id}>
                        <td>{turfBookings.bookDate}</td>
                        <td>{turfBookings.squadName}</td>
                        <td>{turfBookings.startTime}</td>
                        <td>{turfBookings.endTime}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className='text-center lg:ml-4 p-3 lg:w-[800px] lg:h-full rounded-md bg-white'>
            <div className='text-center w-[500px] mt-3'>
              <h1 className='font-semibold w-full underline text-2xl'>Location:</h1>
              <h2 className='text-xl'>{data.turfLocation}</h2>
            </div>
            <div className='mt-5'>
              <h1 className='font-semibold w-full underline text-2xl'>Price:</h1>
              <h2 className='text-xl'>{data.turfPrice} kshs</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ViewListing

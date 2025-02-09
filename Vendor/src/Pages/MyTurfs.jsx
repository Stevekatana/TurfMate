import React, { useEffect, useState } from 'react'
import { FaList } from "react-icons/fa6";
import turf from '../assets/turf.jpg'
import { BsFillGridFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import Axios from 'axios'

function Myturfs() {
  const [myTurf, setMyTurf] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem("ownerToken")
    Axios.get('http://localhost:5000/turfs/myTurfs', { headers:{Authorization: `Bearer ${token}`}})
      .then(res=>{
        res = res.data
        setMyTurf(res)
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div className=' p-5 bg-gray-100 w-full h-screen'>
      <section className='flex items-center justify-between pb-5 border-b-gray border-b-2'>
        <div className='flex items-center justify-center'>
          <h1 className='text-2xl font-semibold ml-10'>My Turfs</h1>
        </div>
        <div className='flex '>
          <div className='p-2'>
          <FaList className='text-2xl'/>
          </div>
          <div className='p-2'>
            <BsFillGridFill className='text-2xl'/>
          </div>
        </div>
      </section>
      <section className=' mt-3  overflow-y-scroll'>
        <ul className='p-3 h-[600px] '>
          {
            myTurf.map((myTurf)=>{
              return(
                <li className='flex p-5 bg-slate-200 rounded-md mb-5' key={myTurf.id}>
                  <div>
                    <img src={turf} alt="image not found" className='w-72 h-56 rounded-md'/>
                  </div>
                  <div className='ml-10'>
                    <div>
                      <h1 className='text-3xl font-semibold'>{myTurf.turfName}</h1>
                      <h1>Location: {myTurf.turfLocation}</h1>
                      <h1>Price: {myTurf.turfPrice}</h1>
                    </div>
                    <p className='mt-3'>
                      {myTurf.turfDescription}
                    </p>
                    <div className='flex mt-16'>
                      <Link to='/editturf:id' className='flex items-center justify-center p-2 bg-green-500 rounded-md text-white'>Edit <MdEdit className='ml-2'/></Link>
                      <button className='flex items-center justify-center p-2 bg-red-500 rounded-md ml-3 text-white'>Delete <ImBin2 className='ml-2'/></button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Myturfs

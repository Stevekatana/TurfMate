import React, { useEffect, useState } from 'react'
import { FaList } from "react-icons/fa6";
import turf from '../assets/turf.jpg'
import { BsFillGridFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios'
import Card from '../Components/Card';

function Myturfs() {
  const [myTurf, setMyTurf] = useState([])
  let {id} = useParams()

  useEffect(()=>{
    const token = localStorage.getItem("ownerToken")
    Axios.get('http://localhost:5000/turfs/myTurfs', {headers:{Authorization: `Bearer ${token}`}})
      .then(res=>{
        res = res.data
        setMyTurf(res)
      })
      .catch(err=>console.log(err))
  },[])

  function deleteTurf(){
    Axios.delete('http://localhost:5000/turfs/delete/'+id)
      .then(res=>{
        console.log('done')
        location.reload()
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className=' p-5 bg-gray-100 w-full h-screen'>
      <section className='flex items-center justify-between pb-5 border-b-gray border-b-2'>
        <div className='flex items-center justify-center'>
          <h1 className='text-2xl font-semibold ml-10'>My Turfs</h1>
        </div>
        <div className='flex'>
          <div className='p-2'>
          <FaList className='text-2xl'/>
          </div>
          <div className='p-2'>
            <BsFillGridFill className='text-2xl'/>
          </div>
        </div>
      </section>
      <section className=' mt-3 overflow-y-scroll'>
        <div className='h-auto p-3 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-12' >
          {
            myTurf.map((myTurf)=>{
              return(
                <Card 
                  name={myTurf.turfName}
                  location={myTurf.turfLocation}
                  price={myTurf.turfPrice}
                  description={myTurf.turfDescription}
                  route={`/editturf/${myTurf._id}`}
                  handledelete={deleteTurf}
                />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Myturfs
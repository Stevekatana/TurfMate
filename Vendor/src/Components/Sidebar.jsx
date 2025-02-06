import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { RiDashboard3Fill } from "react-icons/ri"
import { IoPersonSharp } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { TbSoccerField } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import Turf from '../assets/turf.jpg'
import { useEffect, useState } from 'react';
import Axios from 'axios'

function Sidebar() {
  const navigate = useNavigate()
  const [sidebarData, setSidebarData] = useState({})
  useEffect(()=>{
    fetchOwnerData()
  },[])

  function handleLogOut(){
    localStorage.removeItem("ownerToken")
    navigate("/login")
  }
  
  async function fetchOwnerData(){
    try{
      const token = localStorage.getItem("ownerToken")
      let response = await Axios.get('http://localhost:5000/owner/profile', {headers: {Authorization: `Bearer ${token}`}})
      response = response.data
      if (response) {
        setSidebarData(response)
      } else {
        console.error("No data found in response")
      }
    }
    catch(error){
      console.error("Error fetching owner data", error);
    }
  }

  return (
    <div className='bg-gray-800 text-white w-[330px] h-screen p-3'>
        <div className='flex justify-center items-center mt-5 mb-8'>
            <h1 className='text-2xl'>TurfMate VENDOR</h1>
        </div>

        <div>
          <div className='flex items-center justice-center w-full p-2'>
            <img src={Turf} alt="image not found"  className='w-60 h-60 rounded-[999px]'/>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <h1 className='text-2xl'>{sidebarData.ownerFirstName} {sidebarData.ownerLastName}</h1>
          </div>
        </div>

        <div className='flex items-center justify-center mt-5'>
          <ul className=''>
              <li>
                  <Link to='/' className='text-xl flex items-center justify-start mb-3 hover:underline'>
                    <RiDashboard3Fill className='mr-2'/>
                    Dashboard
                  </Link>
              </li>
              <li>
                  <Link to='/myTurf' className='text-xl flex items-center justify-start mb-3 hover:underline'>
                    <TbSoccerField className='mr-2 text-xl'/>
                    My Turfs
                  </Link>
              </li>
              <li>
                  <Link to='/addTurf' className='text-xl flex items-center justify-start mb-3 hover:underline'>
                    <FaPlus className='mr-2'/>
                    Add Turf
                  </Link>
              </li>
              <li>
                  <Link to='/profile' className='text-xl flex items-center justify-start mb-3 hover:underline'>
                    <IoPersonSharp className='mr-2'/>
                    Profile
                  </Link>
              </li>
              <li>
                  <button onClick={handleLogOut} className='text-xl flex items-center justify-start mb-3 text-red-500 hover:underline'>
                    <CiLogout className='mr-2 '/>
                    Log out
                  </button>
              </li>
          </ul>
        </div>

        <div className='text-center absolute bottom-5'>
          <p className='flex items-center justify-center text-gray-400'>powered by StepDev  <FaBoltLightning className='ml-1'/></p>
        </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import turf from '../assets/turf.jpg'
import { Link} from 'react-router-dom'
import { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react'


function Profile() {
  const [ownerData, setOwnerData] = useState({})

  useEffect(()=>{
    const logContainer = document.querySelector('#logContainer')
    const ownerName = document.querySelector('#ownerName')
    const turfCounter = document.querySelector('#turfCounter')

    function checkLogin(){
      const isLogin = localStorage.getItem("ownerToken")
      if(!isLogin){ 
        logContainer.style.display = 'block'
        turfCounter.style.display = 'none'
        ownerName.textContent = "User 0"
      }else{
        fetchOwnerData()
      }
    }
    checkLogin()
  },[])
  
  async function fetchOwnerData(){
    try{
      const token = localStorage.getItem("ownerToken")
      let response = await Axios.get('http://localhost:5000/owner/profile', {headers: {Authorization: `Bearer ${token}`}})
      response = response.data
      if (response) {
        setOwnerData(response)
      } else {
        console.error("No data found in response")
      }
    }
    catch(error){
      console.error("Error fetching owner data", error);
    }
  }
  
  return (
    <div className='w-full'>
      <div className='flex items-center justify-center'>
        <div className='bg-gray-200 w-full h-screen'>
          <div className='bg-gray-800 pb-10 pt-10 flex items-center'>
            <img src={turf} alt="image not found" className='h-44 w-44 rounded-full ml-32'/>

            <div className='ml-52'>
              <h1 className='text-white font-semibold text-3xl' id='ownerName'>{ownerData.ownerFirstName} {ownerData.ownerLastName}</h1>
              <h3 className='text-white text-xl mt-3' id='turfCounter'>Turfs Registered: 3</h3>
              <div className='mt-6 hidden ' id='logContainer'>
                <Link to='/login' className='text-white p-2 border-2 border-white rounded-md hover:bg-white hover:text-gray-800 hover:font-semibold'>Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

import React, { useEffect, useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import turf from '../assets/turf.jpg'
import { FaHeart } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import Axios from 'axios'

function Account() {
    const [user, setUser] = useState({})
    
    const navigate = useNavigate()
    function backToListing(){
        navigate('/listing')
    }

    useEffect(()=>{
        async function fetchUserData(){
            try{
                const token = localStorage.getItem("token")
                let response = await Axios.get('http://localhost:5000/users/me', { headers: {Authorization:`Bearer ${token}`} })
                response = response.data
                if (response) {
                    setUser(response)
                } else {
                    console.error("No user data found")
                }
            }
            catch(error){
                console.error("Error fetching user data", error);
            }
        }
        fetchUserData()
    },[])

    function handleLogOut(){
        localStorage.removeItem("token")
        navigate('/login')
    }

  return (
    <div className='lg:flex lg:items-center lg:justify-center'>
        <div className='w-full lg:w-3/4 h-screen'> 
            <div>    
                <div className='absolute top-8 lg:left-[250px] left-5'>
                    <IoArrowBack className='text-3xl' onClick={backToListing}/>
                </div>

                <div className='lg:flex lg:items-center lg:justify-center lg:mt-20 '>
                    <div className='flex items-center justify-center relative top-10 lg:absolute lg:top-24 lg:left-80'>
                        <img src={turf} alt="image not found" className='rounded-full h-56 w-56'/>
                    </div>
                    <div className='flex items-center justify-center lg:mt-20 w-full mt-14'>
                        <h2 className='font-semibold lg:text-4xl text-2xl'>{user.username}</h2>
                    </div>
                </div>
            </div>

            {/* options tab */}
            <div className='bg-gray-100 p-6 mt-32'>
                <div className='w-full bg-navBack p-2 rounded-md mb-2'>
                    <p className='text-white flex items-center justify-center '>Messages <FaMessage  className='text-awesome ml-2'/></p>
                </div>
                <div className='w-full bg-navBack p-2 rounded-md mb-2'>
                    <Link to='/favourites' className='text-white flex items-center justify-center '>Your Favourites <FaHeart className='text-awesome ml-2'/></Link>
                </div>
                <div className='w-full bg-navBack p-2 rounded-md mb-2'>
                    <p className='text-white flex items-center justify-center '>Settings <FaCog className='text-awesome ml-2'/></p>
                </div>
                <div className='w-full bg-navBack p-2 rounded-md flex items-center justify-center'>
                    <button className='text-white flex items-center justify-center text-center' onClick={handleLogOut}>Log Out <IoIosExit className='text-red-500 ml-2 text-2xl'/></button>
                </div>
            </div>
        </div>
    </div>
  )}

export default Account

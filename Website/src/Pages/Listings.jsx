import React ,{ useEffect, useState }from 'react'
import { IoFilter } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import turf from '../assets/turf.jpg'
import Axios from 'axios'

function Listings() {
    const navigate = useNavigate()
    const[listTurf, setListTurf] = useState([])
    const[user, setUser] = useState({})

    useEffect(()=>{
        Axios.get('http://localhost:5000/turfs', )
            .then(res=>{
                res = res.data
                setListTurf(res)
            })
            .catch(err=>console.log(err))

        fetchUserData()
        //TODO: remember to return ths line of code
    },[])
    
    function backHome(){
        navigate('/')
    }


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

  return (
    <div>
            <div className='absolute top-9 left-5 '>
                <IoArrowBack className='text-3xl' onClick={backHome}/>
            </div>
                
                <div className='text-center p-3 mt-5'>
                    <h1 className='font-semibold text-2xl'>Turf Listings</h1>
                </div>

                <Link to='/acc'  className='flex items-center justify-center absolute top-9 left-[280px]  lg:left-[1200px]'>
                    <div>
                        <RiAccountCircleLine className='text-2xl mr-2 lg:text-3xl '/>
                    </div>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>{user.username}</h2>
                    </div>
                </Link>

        {/* search and filter bar */}
        <section className='bg-gray-200 lg:flex lg:justify-around'>
            <div className='flex items-center justify-center p-2 '>
                <form action="">
                    <input type="text" placeholder="Search here..." className='h-10 w-72 mr-5 lg:rounded-md'/>
                    <input type="submit" value="Search" className='bg-navBack text-awesome p-1 rounded-md'/>
                </form>
            </div>
            <div className='flex items-center justify-center p-2 mt-2'>
                <p className='flex mr-3 items-center justify-center gap-2 text-xl'>Filter <IoFilter className='text-xl'/></p>
            </div>
        </section>
        <section>
            {/* grid container */}
            <div className='p-3 overflow-y-scroll lg:grid lg:grid-cols-3 lg:gap-5 lg:p-12'>
                {/* Grid component */}

                {
                    listTurf.map((listTurf)=>{
                        return(
                            <div className=' p-2 rounded-md shadow-md mb-4' key={listTurf._id}>
                                <div className='flex items-center justify-center'>
                                    <img src={turf} alt="image not found" className=' w-80 rounded-md'/>
                                </div>
                                <div className=''>
                                    <div className='flex items-center justify-center mt-3'>
                                        <span className='mr-2 font-semibold'>Title:</span>
                                        <span>{listTurf.turfName}</span>
                                    </div>
                                    <div className='flex justify-around mt-2'>
                                        <div>
                                            <span className='font-semibold'>Location:</span>
                                            <span>{listTurf.turfLocation}</span>
                                        </div>
                                        <div>
                                            <span className='font-semibold'>Price:</span>
                                            <span>{listTurf.turfPrice} ksh</span>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <h3 className='font-semibold text-center'>Description:</h3>
                                        <p className='mt-1 text-center'>{listTurf.turfDescription}</p>
                                    </div>
                                    <div className='flex items-center justify-center mt-2 p-2 bg-navBack w-auto rounded-md'>
                                        <Link className='text-awesome' to={`/viewlisting/${listTurf._id}`}>View Turf</Link>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

                    {/* <div className=' p-2 rounded-md shadow-md mb-4' key={listTurf._id}>
                        <div className='flex items-center justify-center'>
                            <img src={turf} alt="image not found" className=' w-80 rounded-md'/>
                        </div>
                        <div className=''>
                            <div className='flex items-center justify-center mt-3'>
                                <span className='mr-2 font-semibold'>Title:</span>
                                <span>777</span>
                            </div>
                            <div className='flex justify-around mt-2'>
                                <div>
                                    <span className='font-semibold'>Location:</span>
                                    <span>Mombasa</span>
                                </div>
                                <div>
                                    <span className='font-semibold'>Price:</span>
                                    <span>1000 ksh</span>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h3 className='font-semibold text-center'>Description:</h3>
                                <p className='mt-1 text-center'>Start by checking your network configuration (use your laptop's local IP address instead of localhost). Then, inspect for JavaScript errors, CORS issues, or touch event problems. If the issue persists, use tools like ngrok to simplify testing and debugging.</p>
                            </div>
                            <div className='flex items-center justify-center mt-2 p-2 bg-navBack w-auto rounded-md'>
                                <Link className='text-awesome' to={`/viewlisting/${listTurf._id}`}>View Turf</Link>
                            </div>

                        </div>
                    </div> */}
            </div>
        </section>
    </div>
  )
}

export default Listings

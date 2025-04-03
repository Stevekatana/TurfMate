import React from 'react'
import turf from '../assets/turf.jpg'
import {Link} from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import { ImBin2 } from "react-icons/im";

function Card(props) {
  return (
    <div>
        <div className=' p-5 bg-slate-200 rounded-md mb-5'>
        <div className='flex items-center justify-center mt-2'>
            <img src={turf} alt="image not found" className='w-72 h-56 rounded-md'/>
        </div>
        <div className=''>
            <div>
                <h1 className='text-3xl text-center font-semibold mt-5'>{props.name}</h1>
                <div className='flex items-center justify-around p-3'>
                    <h1 className='mt-1 text-xl'><b>Location: </b>{props.location}</h1>
                    <h1 className='mt-1 text-xl'><b>Price: </b>{props.price}</h1>
                </div>
            </div>
            <p className='mt-3 text-center'>{props.description}</p>
            <div className='flex items-center justify-center mt-8'>
                <Link to={props.route} className='flex items-center justify-center p-2 bg-green-500 rounded-md text-white'>Edit <MdEdit className='ml-2'/></Link>
                <button onClick={props.handledelete} className='flex items-center justify-center p-2 bg-red-500 rounded-md ml-3 text-white'>Delete <ImBin2 className='ml-2'/></button>
            </div>
        </div>
        </div>      
    </div>
  )
}

export default Card
import React from 'react'
import turf from '../assets/turf.jpg'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div id='cardWrapper' className='p-2 rounded-md shadow-md mb-4'>
        <div className='flex items-center justify-center'>
            <img src={turf} alt="image not found" className=' w-80 rounded-md'/>
        </div>
        <div className=''>
            <div className='flex items-center justify-center mt-3'>
                <span className='mr-2 font-semibold'>Title:</span>
                <span>{props.turfname}</span>
            </div>
            <div className='flex justify-around mt-2'>
                <div>
                    <span className='font-semibold'>Location:</span>
                    <span> {props.turflocation}</span>
                </div>
                <div>
                    <span className='font-semibold'>Price:</span>
                    <span> {props.turfprice} ksh</span>
                </div>
            </div>
            <div className='mt-2'>
                <h3 className='font-semibold text-center'>Description:</h3>
                <p className='mt-1 text-center lg:w-full'>{props.turfdescription}</p>
            </div>
            <div className='flex items-center justify-center mt-2 p-2 bg-navBack w-auto rounded-md'>
                <Link className='text-awesome' to={props.route} onClick={props.joinRoom}>View Turf</Link>
            </div>
        </div>
    </div>
  )
}

export default Card

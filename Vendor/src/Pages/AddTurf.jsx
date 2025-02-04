import React ,{useState}from 'react'
import placeholder from '../assets/add-image.png'
import Axios from 'axios'

function AddTurf() {
  const [turfName, setTurfName] = useState('')
  const [turfLocation, setTurfLocation] = useState('')
  const [turfPrice, setTurfPrice] = useState('')
  const [turfDescription, setTurfDescription] = useState('')

  function addTurf(e){
    e.preventDefault()
    const token = localStorage.getItem("ownerToken")
    Axios.post('http://localhost:5000/turfs/new', {turfName, turfLocation, turfPrice, turfDescription}, {headers:{Authorization: `Bearer ${token}`}})
      .then(res=>{
        console.log(res)
        alert('Success')
        location.reload()
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className=' bg-gray-100 w-screen'>
      <div className='h-full w-full p-5 '>
        <label className="relative top-32">Select Turf Image:</label>
        <img src={placeholder} alt="image not found" className='h-40 w-40 relative top-10 left-48'/>
      </div>

      <form onSubmit={addTurf} className='absolute top-32 left-[800px]'>
        <h2 className='text-2xl text-center pb-5'>Add Turf</h2>
        <div>
          <input type="text" placeholder='Add Turf Name' className='h-10 w-96 rounded-md' onChange={(e)=>{setTurfName(e.target.value)}}/>
        </div>
        <div>
          <input type="text" placeholder='Add Turf Location' className='h-10 w-96 rounded-md mt-5' onChange={(e)=>{setTurfLocation(e.target.value)}}/>
        </div>
        <div>
          <input type="text" placeholder='Add Turf Price' className='h-10 w-96 rounded-md mt-5' onChange={(e)=>{setTurfPrice(e.target.value)}}/>
        </div>
        <div>
          <textarea rows='5' type="text" placeholder='Add Turf Description' className=' w-96 rounded-md mt-5 resize-none' onChange={(e)=>{setTurfDescription(e.target.value)}}/>
        </div>
        <div>
          <input type="submit" value="Save"  className='h-10 w-32 bg-green-500 mt-2 text-white rounded-md'/>
        </div>
      </form>
    </div>
  )
}

export default AddTurf

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
    <div className='w-full items-center justify-center'>
      <div className=''>
        <div className='flex items-center justify-center p-3 mt-10'>
          <h1 className='text-3xl font-semibold'>Add New Turf</h1>
        </div>
        <div className='flex items-center justify-center mt-10 bg-gray-50 w-[800px] ml-[400px] rounded-md border-solid border-2 border-gray-200'>
          <div className='p-3 mr-32'>
            <h2 className='text-xl'>Upload a turf Image:</h2>
          </div>

          <img src="" alt="No image found" className='w-52 h-52'/>
          <input type="file" name="Upload image" id="" />
        </div>
        <div className=' flex items-center justify-center mt-10 border-solid rounded-md border-gray-200 border-2 w-2/4 ml-[400px]'>
          <form onSubmit={addTurf}>
            <div className='p-2'>
              <h1 className="text-xl">Turf Name:</h1>
              <input type="text" required className="w-[600px] rounded-md h-10 bg-gray-100 placeholder:ml-5" onChange={(e)=>{setTurfName(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Location:</h1>
              <input type="text" required className="w-[600px] rounded-md h-10 bg-gray-100"  onChange={(e)=>{setTurfLocation(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Price:</h1>
              <input type="text" required className="w-[600px] rounded-md h-10 bg-gray-100"  onChange={(e)=>{setTurfPrice(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Descrption: (not more than 500 words)</h1>
              <textarea type="text" rows='5' required className="w-[600px] rounded-md  bg-gray-100"  onChange={(e)=>{setTurfDescription(e.target.value)}}/>
            </div>
            <div className='flex items-center justify-center mb-2'>
              <input type="submit" value="Save Turf" className='bg-green-500 rounded-md p-2 w-24'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTurf

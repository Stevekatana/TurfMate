import React, {useState} from 'react'
import turf from '../assets/turf.jpg'
import { useParams } from 'react-router-dom'
import Axios  from 'axios'

function EditTurf() {
  const [edit, setEdit] = useState([])

  const [editName, setEditName] = useState('')
  const [editLocation, setLocation] = useState('')
  const [editPrice, setPrice] = useState('')
  const [editDesc, setDesc] = useState('')

  
  let {id}= useParams()

  useState(()=>{
     Axios.get('http://localhost:5000/turfs/getData/'+id)
      .then(res=>{
        res = res.data
        setEdit(res)
        console.log(res)
      })
      .catch(err=>console.log(err))
  },[])

  function handleEdit(){
    Axios.put('http://localhost:5000/turfs/update'+id,{editName, editLocation, editPrice, editDesc})
      .then(res =>{
        console.log(res)
      })
      .catch(err => console.log(err))
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
          <form onSubmit={handleEdit}>
            <div className='p-2'>
              <h1 className="text-xl">Turf Name:</h1>
              <input type="text" className="w-[600px] rounded-md h-10 bg-gray-100 placeholder:ml-5" placeholder={edit.turfName} onChange={(e)=>{setEditName(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Location:</h1>
              <input type="text" className="w-[600px] rounded-md h-10 bg-gray-100" placeholder={edit.turfLocation}   onChange={(e)=>{setLocation(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Price:</h1>
              <input type="text" className="w-[600px] rounded-md h-10 bg-gray-100" placeholder={edit.turfPrice}   onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
            <div className='p-2 '>
              <h1 className="text-xl">Turf Descrption: (not more than 500 words)</h1>
              <textarea type="text" rows='5' className="w-[600px] rounded-md  bg-gray-100" placeholder={edit.turfDescription}   onChange={(e)=>{setDesc(e.target.value)}}/>
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

export default EditTurf

import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

function SignUp() {
  const [ownerFirstName, setOwnerFirstName] = useState('')
  const [ownerLastName, setOwnerLastName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [ownerPhone, setOwnerPhone] = useState('')
  const [ownerPassword, setOwnerPassword] = useState('')
  const [confirmPass, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function turfOwnerRegistration(e){
    e.preventDefault()
    if(ownerPassword != confirmPass){
      alert('Passwords do not match')
    }else{
      Axios.post('http://localhost:5000/owner/register',{ownerFirstName, ownerLastName, ownerEmail, ownerPhone, ownerPassword})
        .then(res =>{
          navigate('/login')
        })
        .catch(err =>{
          alert('Registration Failed')
          console.log(err)
        })
      }
  }
  return (
    <div className=' p-5 bg-gray-100 w-full h-screen flex items-center justify-center'>
      
        <form className="p-3 bg-gray-300 rounded-md h-auto w-auto" onSubmit={turfOwnerRegistration}>
          <h1 className='text-center text-3xl font-semibold'>Turf Owner registration</h1>
          <div className='mt-5'>
            <input type="text" placeholder="Enter first name" className="h-10 w-72 rounded-md placeholder:text-center" onChange={(e)=>{setOwnerFirstName(e.target.value)}}/>
            <input type="text" placeholder="Enter Last name" className="h-10 w-72 ml-4 rounded-md placeholder:text-center" onChange={(e)=>{setOwnerLastName(e.target.value)}}/>
          </div>
          <div className='mt-5'>
            <input type="text" placeholder="Enter Email Address" className="h-10 rounded-md w-full placeholder:text-center" onChange={(e)=>{setOwnerEmail(e.target.value)}}/>
          </div>
          <div className='mt-5'>
            <input type="text" placeholder="Enter Phone number" className="h-10 w-full rounded-md placeholder:text-center" onChange={(e)=>{setOwnerPhone(e.target.value)}}/>
          </div>
          <div className='mt-5'>
            <input type="password" placeholder="Enter Password" className="h-10 w-full rounded-md placeholder:text-center" onChange={(e)=>{setOwnerPassword(e.target.value)}}/>
          </div>
          <div className='mt-5'>
            <input type="password" placeholder="Confirm Password" className="h-10 w-full rounded-md placeholder:text-center" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          </div>
          <div className='w-full text-center mt-10'>
            <input type="submit" value="Register" className="bg-green-500 text-center p-2 rounded-md" />
            <Link to='/login'className='ml-10 italic text-sm'>Already have an account? Log in</Link>
          </div>
        </form>
    </div>
  )
}

export default SignUp
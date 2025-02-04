import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


function LogIn() {
  const navigate = useNavigate()
  const [ownerEmail, setOwnerEmail] = useState('')
  const [ownerPassword, setOwnerPassword] = useState('')

  async function handleOwnerLogin(e){
    e.preventDefault()
    await Axios.post('http://localhost:5000/owner/login', {ownerEmail, ownerPassword})
      .then(res =>{
        res = res.data
        localStorage.setItem("ownerToken", res.token)
        alert('Login succesful')
        navigate('/')
      })
      .catch(err =>{
        alert('Owner login failed')
        console.log(err)
      })
  }

  return (
    <div className=' p-5 bg-gray-100 w-full h-screen flex items-center justify-center'>      
      <form className="p-3 bg-gray-300 rounded-md h-auto w-auto" onSubmit={handleOwnerLogin}>
        <h1 className='text-center text-3xl font-semibold'>Turf Owner Login</h1>
        <div className='mt-5'>
          <input type="text" placeholder="Enter Email Address" className="h-10 rounded-md w-full placeholder:text-center" onChange={(e)=>{setOwnerEmail(e.target.value)}}/>
        </div>
        <div className='mt-5'>
          <input type="text" placeholder="Enter Password" className="h-10 w-full rounded-md placeholder:text-center"  onChange={(e)=>{setOwnerPassword(e.target.value)}}/>
        </div>
        <div className='w-full text-center mt-10 '>
          <input type="submit" value="Log in" className="bg-green-500 text-center p-2 rounded-md " />
          <Link to='/register'className='ml-10 italic text-sm'>Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default LogIn

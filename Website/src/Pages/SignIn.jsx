import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'

function SignIn() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const navigate = useNavigate()


    function backHome(){
        navigate('/')
    }

    function handleSignIn(e){
        e.preventDefault()        
        if(password !=confPass){
            alert('Passwords dont match')
        }else{
            Axios.post('http://192.168.100.50:5000/users/register',{username, email, phone, password})
                .then(res => {
                    console.log(res)
                    navigate('/login')
                })
                .catch(err => console.log(err))
        }
    }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='absolute top-10 left-10 '>
        <IoArrowBack className='text-3xl' onClick={backHome}/>
      </div>


      <div className='p-3 shadow-md w-auto rounded-md lg:w-[500px]'>
        <div>
            <h1 className='text-center text-2xl font-semibold'>Sign Up</h1>
        </div> 
        <div className='mt-5 p-2 flex items-center justify-center'>
            <form onSubmit={handleSignIn}>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setUsername(e.target.value)}} required type="text" placeholder="Enter Username" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Enter Email Address" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setPhone(e.target.value)}} required type="text" placeholder="Enter Phone Number" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setPassword(e.target.value)}} required type="text" placeholder="Enter your password" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setConfPass(e.target.value)}} required type="text" placeholder="Confirm Password" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <button type="submit" className='bg-navBack text-awesome p-3 text-lg rounded-md lg:rounded-md' onClick={handleSignIn}>Sign Up</button>

                    <Link to={'/login'} className='text-xs italic'>Already have an Account? Log in</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn

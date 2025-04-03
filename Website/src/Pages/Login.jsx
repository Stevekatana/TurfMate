import React ,{useState}from 'react'
import Axios from 'axios'
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin (e){
      e.preventDefault()
      await Axios.post('http://localhost:5000/users/login', {username, password})
        .then(res =>{
          res = res.data
          localStorage.setItem("token", res.token)
          navigate('/listing')
        })
        .catch(err =>{
          alert('login failed')
          console.log(err)
        })
    }

    function backHome(){
        navigate('/')
    }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='absolute top-10 left-10 '>
        <IoArrowBack className='text-3xl' onClick={backHome}/>
      </div>


      <div className='p-3 shadow-md w-auto rounded-md lg:w-[500px]'>
        <div>
            <h1 className='text-center text-2xl font-semibold'>Log in</h1>
        </div> 
        <div className='mt-5 p-2 flex items-center justify-center'>
            <form onSubmit={handleLogin}>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter Username" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center'>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Enter your password" className="shadow-md mb-5 rounded-md h-10 w-72 lg:w-96 placeholder:text-center" />
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <input type="submit" value="Log In" className='bg-navBack text-awesome p-2 lg:rounded-md'/>

                    {/* TODO:REMEMBER TO FIX THIS LINE AFTER ADDING SCHEDULING TABLE */}
                    <Link to='/' className='text-xs italic'>Don't have an Account? Sign Up</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Profile from './Pages/Profile'
import AddTurf from './Pages/AddTurf'
import MyTurf from './Pages/MyTurfs'
import EditTurf from './Pages/EditTurf'
import Sidebar from './Components/Sidebar'
import Bookings from './Pages/Bookings'
import Messages from './Pages/Messages'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import io from 'socket.io-client'
const socket = io('http://localhost:5000')
import Axios from 'axios'

function App() {
  let notif = 'A new Booking has been made. Refresh page.'
  
  useEffect(()=>{
    socket.on("connection", () => {
      console.log(`Owner has connected to socket with id: ${socket.id}`);
    });

    let oID
    const token = localStorage.getItem("ownerToken")
    Axios.get('http://localhost:5000/owner/socketid', {headers: {Authorization: `Bearer ${token}`}})
      .then(res =>{
        oID = res.data._id
        console.log(`This, ${oID}`)
        socket.oid = oID
        socket.emit('owner-room', socket.oid)
      })
      .catch(err => console.log(err))

      socket.on('admin-notif', () =>{
      toast(notif)
    }) 

    return () => {
      socket.off("admin-notif");
    };
  },[])
  
  return (
    <div className='flex'>
      <Sidebar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addTurf" element={<AddTurf />} />
        <Route path="/myTurf" element={<MyTurf />} />
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/editturf/:id" element={<EditTurf />}/>
        <Route path='/messages' element={<Messages />}/>
      </Routes>
    </div>
  )
}

export default App

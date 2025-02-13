import React from 'react'
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
import ViewBooking from './Pages/ViewBooking'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addTurf" element={<AddTurf />} />
        <Route path="/myTurf" element={<MyTurf />} />
        <Route path="/bookings" element={<Bookings />}/>
        <Route path='/viewbooking' element={<ViewBooking />}/>
        <Route path="/editturf:_id" element={<EditTurf />}/>
      </Routes>
    </div>
  )
}

export default App

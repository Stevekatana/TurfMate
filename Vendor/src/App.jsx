import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Profile from './Pages/Profile'
import AddTurf from './Pages/AddTurf'
import MyTurf from './Pages/MyTurfs'
import SideBar from './Components/SideBar'
import EditTurf from './Pages/EditTurf'

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addTurf" element={<AddTurf />} />
        <Route path="/myTurf" element={<MyTurf />} />
        <Route path="/editturf:_id" element={<EditTurf />}/>
      </Routes>
    </div>
  )
}

export default App

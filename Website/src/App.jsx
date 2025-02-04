import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Login from './Pages/Login'
import Listings from './Pages/Listings'
import ViewListing from './Pages/ViewListing'
import BookingPage from './Pages/BookingPage'
import Account from './Pages/Account'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<SignIn />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/listing' element={<Listings />}/>
        <Route path='/viewlisting/:id' element={<ViewListing />}/>
        <Route path='/booking' element={<BookingPage />}/>
        <Route path='/acc' element={<Account />}/>
      </Routes>
    </div>
  )
}

export default App

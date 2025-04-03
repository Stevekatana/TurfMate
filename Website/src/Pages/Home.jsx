import React, { useEffect, useRef, useState } from 'react'
import turf from '../assets/turf 1.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';

function Home() {
  const [active, setActive] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const productRef = useRef(null)
  const footerRef = useRef(null)
  const dropDown =document.querySelector('#dropDown')
  const navigate = useNavigate()
  
  function handleDrop(){
    setActive(true)
    if(active == true){
      dropDown.style.display = 'block'
      setActive(false)
    }else if(active == false){
      dropDown.style.display = 'none'
    }
  }

  function scrollHome(){
    homeRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollAbout(){
    aboutRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function openSignin(){
    navigate('/register')
  }

  return (
    <div className=''>
      <section ref={homeRef} className='h-screen w-full'>
        <img src={turf} alt="image not found" className='h-full w-full'/>
        <div className='flex fixed top-0 bg-navBack z-10 w-full'>
          <div className='p-8 lg:ml-14'>
            <h1 className='text-white text-4xl' onClick={scrollHome}>TurfMate</h1>
          </div>
          <div className='lg:ml-burger'>
            <GiHamburgerMenu onClick={handleDrop} className='text-white text-4xl absolute left-80 top-8 lg:hidden'/>
            <ul id='dropDown' className='bg-navBack hidden mt-topper w-full absolute -ml-crisp lg:flex lg:gap-10 lg:ml-20 lg:mt-10 lg:bg-transparent'>
              <li onClick={scrollHome} className='p-2 text-center text-awesome text-xl lg:text-white hover:text-awesome hover:cursor-pointer'>Home</li>
              <li onClick={scrollAbout} className='p-2 text-center text-awesome text-xl lg:text-white hover:text-awesome hover:cursor-pointer'>Why Us</li>
              <li onClick={openSignin} className='p-2 text-center text-awesome text-xl lg:text-white hover:text-awesome hover:cursor-pointer'>Sign in</li>
              <li className='p-2 text-center text-awesome text-xl lg:text-white hover:text-awesome'>Contact Us</li>
            </ul>
          </div>
        </div>
        {/* landing area */}
        <div className='flex items-center justify-center p-3 absolute top-50 w-full'>
          <div>
            <h2 className='text-white text-center text-3xl lg:text-6xl'>Your Turf, Your Time, Our Ease</h2>
            <div className='flex items-center justify-center p-5 mt-14'>
              <button onClick={openSignin} className='text-center bg-awesome p-3 rounded-md font-semibold'>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section  ref={aboutRef} className='p-7 border-b-2'>
        <div className='flex items-center justify-center p-3'>
          <h1 className='text-3xl italic font-semibold'>Why Us</h1>
        </div>
        <div className='text-center mt-5'>
          <p>
            At Turf Mate, we’re passionate about bringing people together through sports and recreation. Our mission is to make finding and booking the perfect turf simple, fast, and enjoyable. Whether you're planning a casual game with friends or organizing a competitive match, we provide the tools you need to book the best venues effortlessly.
             We connect sports enthusiasts with turf owners, fostering a community where quality and convenience come first. With a futuristic design, real-time availability, and seamless booking features, Turf Mate is here to redefine how you play.
          </p>
          <p className='font-semibold mt-5 italic'>Join us and make every game a memorable one!</p>
        </div>
      </section>

      {/* show some listings */}
      <section className='mt-5'>
        <div className='flex items-center justify-center p-3'>
          <h1 className='text-3xl italic font-semibold'>Listed Turfs</h1>
        </div>
        <div className='grid grid-cols-3 gap-10 p-10 mt-5'>
          <Card 
            turfname='777 recreational center'
            turfprice='4000'
            turflocation='Syokimau'
            turfdescription='A place where grass is green and where stars are made, welcome to sweatervest camp where you can make your dreams come true'
            route='/listing'
          />
          <Card 
            turfname='777 recreational center'
            turfprice='4000'
            turflocation='Syokimau'
            turfdescription='A place where grass is green and where stars are made, welcome to sweatervest camp where you can make your dreams come true'
            route='/listing'
          />
          <Card 
            turfname='777 recreational center'
            turfprice='4000'
            turflocation='Syokimau'
            turfdescription='A place where grass is green and where stars are made, welcome to sweatervest camp where you can make your dreams come true'
            route='/listing'
          />
        </div>
      </section>

      {/* footer */}
      <section className='bg-navBack'>
        <div className=''>
          <div className='p-8'>
            <h1 className='text-white text-center text-2xl'>TurfMate</h1>
            <div className='text-white flex items-center justify-center mt-5 gap-10'>
              <a href="">
                <FaInstagram className='text-3xl'/>
              </a>
              <span>.</span>
              <a href="">
                <FaTwitter className='text-3xl'/>
              </a>
            </div>
            <div className='mt-10 flex items-center justify-center'>
              <p className='text-white'>&nbsp; 2024. All rights reserved</p>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}

export default Home
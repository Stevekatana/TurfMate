import React, { useState } from 'react'
import io from 'socket.io-client'
const socket = io('http://localhost:5000')
import { FaPaperPlane } from "react-icons/fa";

function Messages() {
    const [text, setText] = useState('')

    function sendMessage(e){
        e.preventDefault()
        console.log( text)
        socket.emit('chatwithuser', text)
        // e.target.reset
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className=' h-[900px] w-full'>
            <div className='p-7 text-center border-b-2 border-b-gray-800'>
                <h1 className='font-semibold text-3xl'>My Messages</h1>
            </div>
            <div className='flex h-[88.2vh] bg-white'>
                <div className='p-2 bg-gray-800 border-r-4 w-[400px] border-l-2 border-r-white rounded-t-md'> 
                    <ul>
                        <li className='border-b-2 border-b-white pr-3 pl-3 hover:bg-gray-700'>
                            <h2 className='text-xl capitalize text-white font-semibold mt-2 mb-2'>client 1</h2>
                            <p className=' mt-2  text-white'>here is a message for you</p>
                            <div className='w-5 h-5 bg-red-500 rounded-full relative -top-10 left-56'></div>
                        </li>
                    </ul>
                </div>
                <div className='m-[10px] w-full h-[98%] bg-white rounded-md'>
                    <div className='flex p-3 border-b-2 border-b-gray-800'>
                        <div className=' border-b-2 w-full'>
                            <h1 className='text-2xl font-semibold ml-5'>User 1</h1>
                        </div>
                        <div>
                            {/* TODO:FIND OUT WHAT TO PUT HERE */}
                        </div>
                    </div>
                    <div className='h-[80%] p-10'>
                        <div className='bg-gray-400 w-auto p-2 rounded-full pl-3'>
                            <div>
                                User
                            </div>
                            <div className='w-auto'>
                                This is a message for you client
                            </div>
                        </div>
                        <div className='bg-gray-800 w-auto p-2 mt-3 rounded-full pl-3 text-white'>
                            <div>
                                Admin
                            </div>
                            <div>
                                This is a message for you admin
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 bottom-10 flex items-center justify-center gap-5'>
                        <input type="text" onChange={(e)=>{setText(e.target.value)}} placeholder='Type a message' className='w-[900px] h-10 bg-gray-200 rounded-full placeholder:p-3 focus: p-5'/>
                        <button onClick={sendMessage} className='bg-gray-800 p-3 h-10 w-10 rounded-full flex items-center justify-center'><FaPaperPlane className='text-white'/></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Messages

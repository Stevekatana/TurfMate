const express = require('express')
const router = express.Router()
// const messageModel = require('../Models/messageModel')

module.exports = (io)=>{
    io.on('chatwithuser',(message)=>{
        console.log(message)
    })

 return router
}
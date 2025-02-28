const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http')
const Server = require('socket.io')

let app = express()
const server = http.createServer(app)
const io = Server(server ,{
    cors: {
      origin: ['http://localhost:5173','http://localhost:5174'],
      methods: ["GET", "POST"]
    },
})

app.use(express.json())
app.use(cors())
dotenv.config()

// TODO HANDLE CORS CORRECTLY

// TODO ENTER WEBSOCKETS

// routes import
const Users = require('./Routes/clientRoute')
const Owner = require('./Routes/ownerRoute')
const Turfs = require('./Routes/turfRoute')
const Bookings = require('./Routes/bookingRoute')
app.use('/booking', Bookings)
app.use('/owner', Owner)
app.use('/users', Users)
app.use('/turfs', Turfs)


mongoose.connect(process.env.MONGO_URI)
    .then(console.log('Server-Db connection established:(^j^):'))
    .catch(err => {
        console.log('Server-Db connection established has failed:(^n^):', err)
    })

app.get('/', (req,res)=>{
    res.send('Server is live')
})

io.on("connection", (socket)=>{
    console.log(`Client has connected: {${socket.id}}`)
})

const PORT = process.env.PORT
server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
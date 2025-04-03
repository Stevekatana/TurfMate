const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http')
const { initializeSocket } = require("./Middleware/socket");

let app = express()
const server = http.createServer(app)

const io = initializeSocket(server);

app.use((req,res,next)=>{
    req.io = io
    next()
})

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174']
}))
dotenv.config()

// TODO HANDLE CORS CORRECTLY
// TODO ENTER WEBSOCKETS
// routes import
const Users = require('./Routes/clientRoute')
const Owner = require('./Routes/ownerRoute')
const Turfs = require('./Routes/turfRoute')
const Bookings = require('./Routes/bookingRoute')
const Message = require('./Routes/messageRoute')
app.use('/booking', Bookings)
app.use('/chat', Message)
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

const PORT = process.env.PORT
server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
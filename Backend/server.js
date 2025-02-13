const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

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

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
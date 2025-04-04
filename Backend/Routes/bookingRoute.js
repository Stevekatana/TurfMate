const express = require('express')
const router = express.Router()
const app = require('../server') // Adjust the path as necessary
const bookingModel = require('../Models/bookingModel')
const userModel = require('../Models/userModel')
const userAuth = require('../Middleware/userAuthentication')
const ownerAuth = require('../Middleware/ownerAuthentication')
const turfModel = require('../Models/turfModel')
const transporter = require('../Middleware/mailer')
const ownerModel = require('../Models/ownerModel')


router.get('/', async (req,res)=>{
    try {
        const feedback = await bookingModel.find()
        res.json(feedback)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get('/mybookings', ownerAuth, async(req,res)=>{
    try{
        const turfOwner = req.owner.id
        const bookingData = await bookingModel.find({ownerID: turfOwner})
        res.json(bookingData)
    }
    catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.post('/new/:id', userAuth, async(req,res)=>{
    const turfId = req.params.id
    
    let turfNAME = await turfModel.findById(turfId).select('turfName -_id')
    turfNAME = turfNAME.turfName
    
    const userId = req.user.id
    let query 
    // find userName for submission
    const user = await userModel.findById(userId).select("-__v -_id -email -phone -password")
    let bookerName = user.username
    
    const owner = await turfModel.findById(turfId)
    const ownerID = owner.turfOwner
    

    const bookingSerialNo = BigInt(Math.floor(Math.random() * 9e16) + 1e16).toString();
    
    let bookLocation = await turfModel.findById(turfId).select('turfLocation -_id')
    bookLocation = bookLocation.turfLocation

    const { squadName, bookDate, startTime, endTime } = req.body

    const ownerAddress = await ownerModel.findById(ownerID).select('ownerEmail -_id')
    let address = ownerAddress.ownerEmail

    const userEmail = await userModel.findById(userId).select('email -_id')
    let userAddress = userEmail.email

        // submit booking entry
    query = new bookingModel({turfId, turfNAME, ownerID, bookLocation, bookerName, squadName, bookDate, startTime, endTime , bookingSerialNo})
    query.save()
    

    const bookingEmail = {
        from: process.env.EMAIL_USER,
        to: address,
        cc: userAddress,
        subject: `${bookerName} made a booking to ${turfNAME}`,
        text: `${bookerName} made a booking to ${turfNAME} for ${bookDate} starting from ${startTime} until ${endTime}. Below is a copy of your ticket which will be used to confirm your booking. Game on!!`,
        // html:``
    }
    // transporter.sendMail(bookingEmail)

    req.io.to('room1').emit('admin-notif')
    res.json(query)
})

router.delete('/del', async(req,res)=>{
    const del = await bookingModel.deleteMany()
    res.json(del)
})

module.exports = router
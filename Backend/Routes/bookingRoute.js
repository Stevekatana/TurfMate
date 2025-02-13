const express = require('express')
const router = express.Router()
const bookingModel = require('../Models/bookingModel')
const userModel = require('../Models/userModel')
const userAuth = require('../Middleware/userAuthentication')
const ownerAuth = require('../Middleware/ownerAuthentication')
const turfModel = require('../Models/turfModel')
const { findById } = require('../Models/ownerModel')
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

    // find userName for submission
    const user = await userModel.findById(userId).select("-__v -_id -email -phone -password")
    let bookerName = user.username
    
    // find ownerId using turf id from the truf Model
    const owner = await turfModel.findById(turfId)
    const ownerID = owner.turfOwner

    //generate a random serial number for ticket
    const bookingSerialNo = BigInt(Math.floor(Math.random() * 9e16) + 1e16).toString();
    
    let bookLocation = await turfModel.findById(turfId).select('turfLocation -_id')
    bookLocation = bookLocation.turfLocation

    const { squadName, bookDate, bookTime, bookingDuration } = req.body

    //submit booking entry
    const query = new bookingModel({turfNAME, ownerID, bookLocation, bookerName, squadName, bookDate, bookTime, bookingDuration, bookingSerialNo})
    query.save()

    const ownerAddress = await ownerModel.findById(ownerID).select('ownerEmail -_id')
    let address = ownerAddress.ownerEmail

    const bookingEmail = {
        from: process.env.EMAIL_USER,
        // to: address,
        to:"stevetradess502@gmail.com",
        subject: `${bookerName} made a booking to ${turfNAME}`,
        text: `${bookerName} made a booking to ${turfNAME} for ${bookDate} at ${bookTime} for a duration of ${bookingDuration} hours`
    }
    console.log(bookingEmail)
    // await transporter.sendMail(bookingEmail)

    res.json(query)
})

router.delete('/del', async(req,res)=>{
    const del = await bookingModel.deleteMany()
    res.json(del)
})

module.exports = router
const express = require('express')
const mongose = require('mongoose')
const router = express.Router()
const turfModel = require('../Models/turfModel')
const ownerModel = require('../Models/ownerModel')
const bookingModel = require('../Models/bookingModel')
const ownerAuth = require('../Middleware/ownerAuthentication')

router.get('/', async(req,res)=>{
    const feedback = await turfModel.find()
    res.json(feedback)
})

router.get('/getData/:id', async(req,res)=>{
    const id = req.params.id
    const query = await turfModel.findById(id)
    res.json(query)
})

router.get('/myTurfs', ownerAuth ,async(req,res)=>{
    try {
        const ownerId = req.owner.id;
        const turfdata = await turfModel.find({ turfOwner: ownerId });
        res.json(turfdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get('/bookings/:id', async(req,res)=>{
    const idTurf = req.params.id
    try {
        const bookingData = await bookingModel.find({turfId: idTurf})
        res.json(bookingData)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "Invalid Turf ID" })
    }
})

router.post('/new', ownerAuth, async(req,res)=>{
    const turfOwner = req.owner.id
    const {turfName, turfLocation, turfPrice, turfDescription} = req.body
    const query = new turfModel({turfName, turfLocation, turfPrice, turfDescription, turfOwner})
    query.save()
    res.json(query)
})


// TODOresearch more on this
router.put('/update/:id', async(req,res)=>{
    const id = req.params.id
    const {editName, editLocation, editPrice, editDesc} = req.body
    const query = new turfModel.findByIdAndUpdate(id)
    query.save()
    res.json(query)
})

router.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id
    const delQuery = await turfModel.findOneAndDelete(id)
    res.json(delQuery)
})

module.exports = router
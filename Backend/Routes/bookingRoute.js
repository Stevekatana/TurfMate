const express = require('express')
const router = express.Router()
const bookingModel = require('../Models/bookingModel')

router.get('/', async (req,res)=>{
    const feedback = await bookingModel.find()
    res.json(feedback)
})

router.post('/new', async(req,res)=>{
    const { bookerName, squadName, bookingDate, bookingDuration } = req.body

    const query = new bookingModel({ bookerName, squadName, bookingDate, bookingDuration })
    query.save()
    res.json(query)
})

module.exports = router
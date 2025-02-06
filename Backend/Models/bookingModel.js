const mongoose = require('mongoose')
const Turf = require('./turfModel')
const Owner = require('./ownerModel')
const User = require('./userModel')

const bookingSchema = new mongoose.Schema({
    turfId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Turf"
    },
    ownerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Owner"
    },
    bookingName:{
        type:String,
        ref: "User"
    },
    squadName:{
        type:String,
        required:true
    },
    bookingDate:{
        type:Date,
        required:true
    },
    bookingDuration:{
        type:String,
        required:true
    },
    bookingSerialNo:{
        type:Number,
        required:true
    }
})
const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel
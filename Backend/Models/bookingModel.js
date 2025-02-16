const mongoose = require('mongoose')
const Turf = require('./turfModel')
const Owner = require('./ownerModel')
const User = require('./userModel')

const bookingSchema = new mongoose.Schema({
    turfNAME:{
        type:String
    },
    ownerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Owner"
    },
    bookerName:{
        type:String,
        ref: "User"
    },
    squadName:{
        type:String,
        required:true
    },
    bookDate:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    bookLocation:{
        type:String,
        required:true
    },
    bookingSerialNo:{
        type:String,
        required:true
    }
})
const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel
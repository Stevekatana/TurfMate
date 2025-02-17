const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    turfId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Turf"
    },
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
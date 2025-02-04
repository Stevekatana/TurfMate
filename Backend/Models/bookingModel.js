const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
    bookerName:{
        type:String,
        required:true
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
    }
})
const bookingModel = mongoose.model('booking', bookingSchema)
module.exports = bookingModel
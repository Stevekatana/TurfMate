const mongoose = require('mongoose')
const Owner = require('./ownerModel')

const turfSchema = new mongoose.Schema({
    turfName:{
        type:String,
        required:true
    },
    turfLocation:{
        type:String,
        required:true
    },
    turfPrice:{
        type:Number,
        required:true
    },
    turfDescription:{
        type:String,
        required:true
    },
    turfOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Owner,
    }
})

const turfModel = mongoose.model('turf', turfSchema)
module.exports = turfModel
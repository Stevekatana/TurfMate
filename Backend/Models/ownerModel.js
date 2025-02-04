const mongoose = require('mongoose')
const ownerSchema = new mongoose.Schema({
    ownerFirstName:{
        type:String,
        required:true
    },
    ownerLastName:{
        type:String,
        required:true
    },
    ownerEmail:{
        type:String,
        required:true,
        unique:true
    },
    ownerPhone:{
        type:String,
        required:true
    },
    ownerPassword:{
        type:String,
        required:true
    },
})

const ownerModel = mongoose.model('owner', ownerSchema)
module.exports = ownerModel
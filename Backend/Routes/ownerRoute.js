const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ownerModel = require('../Models/ownerModel')
const ownerAuth = require('../Middleware/ownerAuthentication')

router.get('/', async(req,res)=>{
    const feed = await ownerModel.find()
    res.json(feed)
})

router.post('/register', async(req,res)=>{
    let { ownerFirstName, ownerLastName, ownerEmail, ownerPhone, ownerPassword } = req.body
    const existingOwner = await ownerModel.findOne({ownerEmail})
    if(existingOwner) return res.status(400).json({message:"User already exists"})
    
    ownerPassword = await bcrypt.hash(ownerPassword, 13)
    
    const query = new ownerModel({ownerFirstName, ownerLastName, ownerEmail, ownerPhone, ownerPassword})
    query.save()
    res.json(query)
})

router.post('/login', async(req,res)=>{
    const {ownerEmail, ownerPassword} = req.body
    const owner = await ownerModel.findOne({ownerEmail})
    if(!owner) return res.status(400).json({message:"User does not exist"})
    
    const isMatch = await bcrypt.compare(ownerPassword, owner.ownerPassword)
    if(!isMatch) return res.status(400).json({message:"Invalid credentials"})
    
    const token = jwt.sign({id: owner._id}, process.env.SECRET_KEY)
    console.log(token,'....', token.id)
    res.json({owner, token})
})

router.get('/profile', ownerAuth, async (req, res) => {
    try {
        const id = req.owner.id
        const data = await ownerModel.findById(id).select("-ownerPassword");
        if (!data) return res.status(404).json({ message: "Owner Not Found!!" });

        res.json(data);
    } catch (error) {
        console.error("Profile Fetch Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router
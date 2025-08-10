const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router()
const userModel = require('../Models/userModel')
const userTokenAuth = require('../Middleware/userAuthentication')

router.get('/', async(req,res)=>{
    const feedback = await userModel.find()
    res.json(feedback)
})

router.post('/register', async (req,res)=>{
    let { username, email, phone, password } = req.body

    const existingUser = await userModel.findOne({email})
    if(existingUser)return res.status(400).json({message:"User already exists"})

    password = await bcrypt.hash(password, 13)

    const query = new userModel({username, email, phone, password})
    query.save()
    res.json(query)
})

router.post('/login', async (req,res)=>{
    const {username, password} = req.body
    const user = await userModel.findOne({username})
    if(!user)return res.status(400).json({message:"User not found"})
    
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)return res.status(400).json({message:"invalid credentials"})

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
    res.json({ user, token })
})

router.get('/me', userTokenAuth, async(req,res)=>{
    const data = await userModel.findById(req.user.id).select("-password")
    if(!data)return res.status(404).json({message:'User Not Found!!'})
    res.json(data)
})
router.delete('/del', async (req,res)=>{
    const del = await userModel.deleteMany()
    res.json(del)
})
module.exports = router
const jwt = require('jsonwebtoken')

async function authToken(req,res,next){
    const authHeader = req.header("Authorization")
    if(!authHeader)return res.status(401).json({message: "Access Denied"})

    const token = authHeader.split(" ")[1]
    if(!token)return res.status(401).json({message:"Token not available"})

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.owner = decoded
    console.log(req.owner)
    next()
}

module.exports = authToken
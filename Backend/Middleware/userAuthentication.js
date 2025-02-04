const jwt = require('jsonwebtoken')

function authToken(req,res,next){
    const authHeader = req.header("Authorization")
    if(!authHeader)return res.status(401).json({message: "Access Denied"})

    const token = authHeader.split(" ")[1]
    if(!token)return res.status(401).json({message:"Token not available"})

    const verified = jwt.verify(token, process.env.SECRET_KEY)
    req.user = verified
    next()
}

module.exports = authToken
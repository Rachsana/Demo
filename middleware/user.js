const jwt=require("jsonwebtoken")
// const {JWT_userSECRET} = require("../routes/user");   create a circular dependency
const {JWT_userSECRET}=require("../config")

function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_userSECRET);

    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"u r not signed in"
        })
    }
}

module.exports={
    userMiddleware
}
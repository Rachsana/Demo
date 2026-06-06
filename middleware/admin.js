const jwt=require("jsonwebtoken")
const {JWT_adminSECRET}=require("../config")

function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_adminSECRET);

    if(decoded){
        req.adminId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"u r not signed in"
        })
    }
}

module.exports={
    adminMiddleware
}
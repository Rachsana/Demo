const {Router} =require("express");
const adminRouter=Router();
const {AdminModel, CourseModel} = require('../db');
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken")
const {JWT_adminSECRET}=require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup",async function(req,res){
    const {email , password, firstname , lastname}=req.body;

    try{
    const hashedpassword=await bcrypt.hash(password,5);
    await AdminModel.create({
        email:email,
        password:hashedpassword,
        firstname: firstname,
        lastname: lastname
    })
    res.json({
        message:"user signed up"
    });}
    catch(e){
        console.error(e);
        res.status(500).json({
            message:"invalid cant signup"
        })
    }
})
adminRouter.post("/login",async function(req,res){
     const {email,password}=req.body;
    const admin=await AdminModel.findOne({
        email:email
    })
    if(admin){
        const passwordMatch=await bcrypt.compare(password,admin.password);
        if(passwordMatch){
            const token=jwt.sign({
                id:admin._id
            },JWT_adminSECRET);

            //can do cookie logic
            res.json({
                token:token
            })
        }
        else{
            res.status(403).json({
            message:"incorrect password"
        })
        }
    }
    else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
})

adminRouter.delete("/course",function(res,req){
    
})
adminRouter.post("/course",adminMiddleware,function(res,req){
    const adminId=req.adminId;
    const {title,description,imageUrl,price}=req.body;
   const course= await CourseModel.create({
        title,description,imageUrl,price,
        createrId:adminId
    })
    res.json({
        message:"course created",
        courseId: course._id
    })
})
adminRouter.post("/course/content",function(res,req){
    
})

module.exports={
    adminRouter: adminRouter
}
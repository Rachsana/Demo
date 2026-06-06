// const express=require("express")
// const Router=express.Router;

// or destucture router directly 
const express = require("express");
const { Router } = express;
const {UserModel}= require('../db')
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')
const {JWT_userSECRET}=require("../config")

const userRouter=Router();

userRouter.post("/signup",async function(req,res){
    const {email , password, firstname , lastname}=req.body;

    try{
    const hashedpassword=await bcrypt.hash(password,5);
    await UserModel.create({
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
});
userRouter.post("/login",async function(req,res){
    const {email,password}=req.body;
    const user=await UserModel.findOne({
        email:email
    })
    if(user){
        const passwordMatch=await bcrypt.compare(password,user.password);
        if(passwordMatch){
            const token=jwt.sign({
                id:user._id
            },JWT_userSECRET);

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

userRouter.get("/purchases",function(res,req){
    
})

module.exports={
    userRouter: userRouter,
}
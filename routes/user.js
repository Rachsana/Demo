// const express=require("express")
// const Router=express.Router;

// or destucture router directly 
const {Router} = require("express");

const userRouter=Router();

userRouter.post("/signup",function(res,req){
    
})
userRouter.post("/login",function(res,req){
    
})

userRouter.get("/purchases",function(res,req){
    
})

module.exports={
    userRouter
}
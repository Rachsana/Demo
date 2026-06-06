const {Router} = require("express")
const courseRouter=Router();
const {CourseModel}= require('../db')
const {userMiddleware}=require("../middleware/user")
//expect to pay money
courseRouter.post("/purchase",userMiddleware,async function(res,req){
    const userId=req.userId;
    const courseId=req.body.courseId;

    await PurchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"purchased"
    })
})

courseRouter.get("/preview",async (req,res)=>{

    const courses=await CourseModel.find({});
    res.json({
        courses
    })
})

module.exports={
    courseRouter: courseRouter
}
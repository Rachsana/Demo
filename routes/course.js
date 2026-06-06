const {Router} = require("express")
const courseRouter=Router();
const {CourseModel}= require('../db')

courseRouter.post("/purchase",function(res,req){
    //expect to pay money
})
courseRouter.get("/preview",function(res,req){
    
})

module.exports={
    courseRouter: courseRouter
}
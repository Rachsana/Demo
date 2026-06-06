const {Router} = require("express")
const courseRouter=Router();

courseRouter.post("/purchase",function(res,req){
    //expect to pay money
})
courseRouter.get("/allcourses",function(res,req){
    
})

module.exports={
    courseRouter
}
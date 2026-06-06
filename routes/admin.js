const {Router} =require("express");
const adminRouter=Router();


adminRouter.post("/signup",function(res,req){
    
})
adminRouter.post("/login",function(res,req){
    
})

adminRouter.use(adminMiddleware)

adminRouter.delete("/course",function(res,req){
    
})
adminRouter.post("/course",function(res,req){
    
})
adminRouter.post("/course/content",function(res,req){
    
})

module.exports={
    adminRouter: adminRouter
}
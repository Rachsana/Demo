const express =require("express")
const jwt=require("jsonwebtoken")
const { UserModel,AdminModel,CourseModel,PurchaseModel}=require("./db");

const app=express()

function auth(){
    
}

app.use(auth)

app.post("/signup",function(res,req){
    
})
app.post("/login",function(res,req){
    
})
app.post("/purchase",function(res,req){
    //expect to pay money
})
app.get("/mypurchase",function(res,req){
    
})
app.get("/allcourses",function(res,req){
    
})

function adminauth(){

}

app.use(adminauth)
app.post("/signup/admin",function(res,req){
    
})
app.post("/login/admin",function(res,req){
    
})
app.delete("/course",function(res,req){
    
})
app.post("/course",function(res,req){
    
})
app.post("/course/content",function(res,req){
    
})

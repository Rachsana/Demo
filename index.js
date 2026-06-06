const express =require("express")
const jwt=require("jsonwebtoken")
const { UserModel,AdminModel,CourseModel,PurchaseModel}=require("./db");
const {userRouter} =require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter}= require('./routes/admin');

//routing in express , express router and how it stucture application a little better
const app=express()

//benefit is all the prefixes can be mentioned over here
app.use('/user',userRouter);

app.use('/course',courseRouter);
app.use('/admin',adminRouter)

//v1 keep runging in prodection and till then can write v2 version

app.listen(3000);

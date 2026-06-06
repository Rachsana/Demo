const express =require("express")
const jwt=require("jsonwebtoken")
const { UserModel,AdminModel,CourseModel,PurchaseModel}=require("./db");
const {userRouter} =require('./routes/user');
const {courseRouter} = require('./routes/course');

//routing in express , express router and how it stucture application a little better
const app=express()


app.use('/user',userRouter);

app.use('/course',courseRouter);



app.listen(3000);

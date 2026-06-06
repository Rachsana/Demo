const express =require("express")
const jwt=require("jsonwebtoken")
const {userRouter} =require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter}= require('./routes/admin');
const mongoose=require("mongoose");

//routing in express , express router and how it stucture application a little better
const app=express()
app.use(express.json());

//nodemon is cli constantly watches the file and updates it 

//benefit is all the prefixes can be mentioned over here
app.use('/user',userRouter);

app.use('/course',courseRouter);
app.use('/admin',adminRouter)

//v1 keep runging in prodection and till then can write v2 version


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
}
main();
app.listen(3000);

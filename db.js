require("dotenv").config();
const mongoose=require("mongoose");

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongoDB");
}
main();

const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

// challenge: if some want to user and admin both?

const User=new Schema({
    _id: ObjectId,
    email:{type:String,unique:true},
    password: String,
    firstname: String,
    lastname:String,
    // role:String
    // role: admin|user
})

const Admin=new Schema({
    _id: ObjectId,
    email:{type:String,unique:true},
    password: String,
    firstname: String,
    lastname:String
})

const Course=new Schema({
    _id:ObjectId,
    title: String,
    description: String,
    price : Number,
    imageUrl= String,
    courseId: ObjectId
})

const Purchases=new Schema({
    _id:ObjectId,
    userId: ObjectId,
    courseId: ObjectId
})

const UserModel=mongoose.model('users',User);
const AdminModel= mongoose.model('admins',Admin);
const CourseModel=mongoose.model('courses',Course);
const PurchaseModel=mongoose.model('purchases',Purchases);

module.export={
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const UserSchema=new Schema({

})
const AdminSchema= new Schema({

})
const CourseSchema=new Schema({

})
const PurchaseSchema=new Schema({

})

const UserModel=mongoose.model("users",UserSchema)
const AdminModel=mongoose.model("admin",AdminSchema)
const CourseModel=mongoose.model("course",CourseSchema)
const PurchaseModel=mongoose.model("purchase",PurchaseSchema)


module.exports={
    UserModel:UserModel,
    AdminModel:AdminModel,
    CourseModel:CourseModel,
    PurchaseModel:PurchaseModel
}
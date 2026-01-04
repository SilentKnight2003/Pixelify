import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        default:"buyer"
    },
    uploads:[{type:mongoose.Schema.ObjectId,ref:"Post"}],
    purchased:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],

})

const User = mongoose.model("User",UserSchema)

export default User;
import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL

export async function connectToDatabase(){
    try{
        if(!DATABASE_URL){
            console.log("Connection string is not present!!")
        }
        await mongoose.connect(DATABASE_URL);
        console.log("Database connected successfully...")
    }catch(err){
        console.log("Unexpected Error!!",err.message)
    }
}


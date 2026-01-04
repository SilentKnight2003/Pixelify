import User from "../model/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const login = async(req,res) => {
       

}

export const signup = async(req,res) => {
  const {username,email,password,accountType} = req.body;
       try{
        console.log(req.body)
        let user = await  User.findOne({username});
        if(user){
          return res.status(400).json({message:"Username alreday exist.."})
        }
        const securePassword = await bcrypt.hash(password,10)
        const newUser = new User({
          username,
          email,
          password: securePassword,
          accountType
        })
        await newUser.save()
        return res.status(201).json({
          data:newUser,
          message:"Account created successfully..."
        })
       }catch(err){
        return res.status(500).json({ message:err.message})
       }
}


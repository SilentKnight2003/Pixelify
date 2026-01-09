import User from "../model/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { generateAccessToken } from "../helpers/accessToken.js";
import { generateRefreshToken } from "../helpers/refreshToken.js";
export const login = async(req,res) => {
  const {email,password} = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"Please sign In."})
    }
    const comparePassword = await bcrypt.compare(password,user.password)
    if(!comparePassword) return res.status(400).json({message:"Invalid credentials."});
    
    const data = {
      id:user._id,
      accountType:user.accountType,
      author:user.username
    }
 
    const accessToken = generateAccessToken(data)
    const RefreshToken = generateRefreshToken(data)
   

    return res.status(200).json({
      message:"Login successfull",
      accessToken,
      RefreshToken,
      role:user.accountType,
      author:user.username
    })
  }catch(err){
    return res.status(500).json({message:err.message})
  }
       

}

export const signup = async(req,res) => {
  const {username,email,password,accountType} = req.body;
       try{
        let user = await  User.findOne({username});
        if(user){
          return res.status(400).json({success: false, message:"Username alreday exist.."})
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
          success: true,
          message:"Account created successfully..."
        })
       }catch(err){
        return res.status(500).json({ success: false, message:err.message})
       }
}


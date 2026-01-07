import jwt from "jsonwebtoken";
import dotenv from "dotenv"



dotenv.config();
export const generateAccessToken = (user)  => {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15min"})
}

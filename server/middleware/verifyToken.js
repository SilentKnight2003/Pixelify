import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();
export const verifyToken = async(req,res,next) => {
    const authHeader = req.header["Authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message:"Unauthorized access."
        })
        
    }
    try{
           jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
               if(err) return res.status(403).json({success:false,message:"Forbidden Request"})
                req.id = user.id
                req.author = user.author
                req.accountType = user.accountType
                next();
           })
        }
        catch(err){
            return res.status(500).json({success:false,message:"Internal server Error"})
        }
}
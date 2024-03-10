import jwt, {Secret } from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"
import dotenv from 'dotenv'
dotenv.config()
const key =process.env.SECRET

const  authenticate= async(req:Request,res:Response,next:NextFunction)=>{
    const header= req.headers.authorization
    if(!header){
        return res.send("no token headers ")
    }
    const token= header.split(" ")[1]
      jwt.verify(token,key as Secret,(err,decoded)=>{
        if(err){
            return res.send("not valid token")
        }
        else {
            res.send(decoded)
            next()
            
        }
    })
}
module.exports={authenticate,key}





import jwt, {Secret } from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"

  


 const authenticate = (req:Request,res:Response,next:NextFunction)=>{
    
    const header= req.headers.authorization
    if(!header){
        return res.send("no token headers ")
    }
    const token= header.split(" ")[1]
      jwt.verify(token,process.env.SECRET as Secret,(err,decoded)=>{
        if(err){
        
            console.log(err)
            return res.status(400).send(err)
        }
        
            console.log(decoded)
            next();
            
        
        
    })
}

 export default authenticate





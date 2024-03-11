import express from "express";

const router= express.Router()
import z from "zod"
import inserti from "../database/db";
import { checkuser } from "../database/db";


 const newUser= z.object({
    username:z.string().trim(),
    password:z.string().min(6),
    name:z.string(),
    role:z.string()
}).strict()


router.post('/signup',async (req,res)=>{
    const newAcc= newUser.safeParse(req.body);
    if(!newAcc.success){
        res.status(400).json({message:newAcc.error})
        return
    }
    let pass= newAcc.data.password;
    if(pass.length<6){
        res.send(400).json({message:"password should has minimum 6 letters"})
        return
    }
     let isuserexist=  await checkuser(newAcc.data.username)
     if(isuserexist){
        res.send("user already exists try with different name")
        return
     }
     else{
        let id= await inserti(newAcc.data.username,newAcc.data.password,newAcc.data.name,newAcc.data.role)
        res.status(200).send(id)



     }



    

    

})

module.exports= router
import express from 'express'
const router= express.Router()
import jwt,{Secret} from "jsonwebtoken"
import z from 'zod'
import { checkuser } from '../database/db'

const code= process.env.SECRET

const userinfo=z.object({
    username:z.string(),
    password:z.string()
})


router.post('/signin',async (req,res)=>{
    let userdetails= userinfo.safeParse(req.body)
    if(!userdetails.success){
        res.send("please check your username and password")
        return
    }
    let checkacc= userdetails.data.username
    let haveacc= await checkuser(checkacc)
    if(!haveacc){
        res.send("please signup first")
        return    
    }
    else{
        let token= jwt.sign({name:userdetails.data.username},code as Secret,{expiresIn:'1h'})
        res.send(`welcome ${userdetails.data.username} ${token}`)
        

    }

    
})
module.exports=router
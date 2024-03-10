import express from "express";
import jwt from "jsonwebtoken"
const router= express.Router()

router.post('/signup',async (req,res)=>{
    res.send("signup page")

})

module.exports= router
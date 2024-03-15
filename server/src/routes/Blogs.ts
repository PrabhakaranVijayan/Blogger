// CRUD operations for the blog

// CREATE BLOG
import express, { json } from 'express'
const router= express.Router()

import z from 'zod'
import { createBlog } from '../database/db';

const blogschema= z.object({
    title:z.string(),
    content:z.string(),
    userid:z.number()
})



router.post('/blogs/new',async (req,res)=>{
    const blogPost=blogschema.safeParse(req.body)
    if(!blogPost.success){
        res.status(400).json({message:blogPost.error})
        return
    }
    let crBlog= await createBlog(blogPost.data.title,blogPost.data.content,blogPost.data.userid)
    res.status(200).send(`your blog is ${crBlog.title} created`);

})

// READ  BLOG

router.get('/blogs/:id',async(req,res)=>{
    const blogid= req.params.id
    if(!blogid){
        res.status(200).json({})
    }
})



module.exports= router
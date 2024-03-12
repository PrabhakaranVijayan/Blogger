// CRUD operations for the blog

// create blog
import express from 'express'
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
    res.status(200).send(`your blog is ${crBlog} `);

})

module.exports= router
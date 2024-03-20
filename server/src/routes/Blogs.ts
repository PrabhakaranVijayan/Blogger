// CRUD operations for the blog

// CREATE BLOG
import express, { json } from 'express'
const router= express.Router()

import z, { number } from 'zod'
import { createBlog, deleteBlog, readAllBlog, readBlog, updatedBlog } from '../database/db';

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
    if(crBlog.title)
    res.status(200).send(`your blog is ${crBlog.title} created`);

})

// READ  BLOG

router.get('/blogs/:id',async(req,res)=>{
    const blogid= parseInt(req.params.id)
    let viewblog= await readBlog(blogid)
    res.status(200).send(viewblog)
})
router.get('/blogs',async(req,res)=>{
    
    let viewblog= await readAllBlog()
    res.status(200).send(viewblog)
})
router.put('/blogs/:id',async (req,res)=>{
    const editBlog= parseInt(req.params.id)
    const updateblog= blogschema.safeParse(req.body)
    if(!updateblog.success){
        res.send("please update the correct course")
        return
    }
    let updated= await updatedBlog(editBlog,updateblog.data.title,updateblog.data.content,updateblog.data.userid)
    res.send(200).send(updated)

})

router.delete('/blogs/:id',async(req,res)=>{
    const delblog= parseInt(req.params.id)
    const deleted= await deleteBlog(delblog)
    res.status(201).send(`the blog ${deleted} is deleted`)
})



module.exports= router
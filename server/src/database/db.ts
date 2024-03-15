import { PrismaClient } from '@prisma/client'
import { number } from 'zod';

const prisma = new PrismaClient()

export default async function inserti (username:string,password:string,fullname:string,role:string){
    const res = await prisma.user.create({
        data:{
            username,
            password,
            fullname,
            role
            
        }
    })
    console.log(res);
    return ("user created successfully")
    
}
export  async function checkuser(username:string){
    const ans= await prisma.user.findUnique({
        where:{
            username:username
            
        }

    })
    return ans
}

export async function createBlog(title:string,content:string,userId:number){
    const newBlog= await prisma.blog.create({
        data:{
            title,
            content,
            userId
            
        }
       
        
    })
    return newBlog
}

export async function readBlog(id:number | null){
    if(!id){
        const allblogs= await prisma.blog.findMany()
        return allblogs;

    }
    const selectedblog= await prisma.blog.findUnique({
        where:{
            id:id
        },
        select:{
            title:true,
            content:true
        }
    })
    return selectedblog;

}




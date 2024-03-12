import { PrismaClient } from '@prisma/client'

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




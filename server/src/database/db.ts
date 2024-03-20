import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function inserti (username:string,password:string,fullname:string,role:string){
    try{
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
    catch(error){
        return (`error occured ${error} please check your input`)
    }
    
}
export  async function checkuser(username:string){
    try{
        const ans= await prisma.user.findUnique({
            where:{
                username:username
                
            }
    
        })
        return ans

    }
    catch(error){
        return (`error occured ${error} please check your input`)
    }
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

export async function readBlog(id:number){
   
    const selectedblog= await prisma.blog.findUnique({
        where:{
            id:id
        },
        select:{
            title:true
        
        }
    })
    return selectedblog;

}

export async function readAllBlog(){
    const allblogs= await prisma.blog.findMany({
        select:{
            title:true
            

        }
    })
    
    return allblogs;

}
export async function updatedBlog(id:number,title:string,content:string,userid:number){
    const updating= await prisma.blog.update({
        where:{
            id:id
        },
        data:{
            title:title,
            content:content,
            userId:userid
        }
    })
    return updating;
}
export async function deleteBlog(id:number){
    const deleteid= await prisma.blog.delete({
        where:{
            id:id
        }
    })
    return deleteid
}




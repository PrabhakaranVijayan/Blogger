import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function inserti (username:string,password:string,fullname:string,role:string){
    const res = await prisma.user.create({
        data:{
            username,
            password,
            fullname,
            role
            
            
            
        
        }
    })
    console.log(res);
    
}
inserti("prabhass","suiiii","prabhakaran","engineer")

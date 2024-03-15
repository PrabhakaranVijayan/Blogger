import express,{Request,Response} from "express"
import authenticate from "./middleware/auth";
const app= express();
const newuser= require('./routes/signup')
app.use(express.json())
const login= require('./routes/signin')
const posts= require('./routes/Blogs')
import dotenv from 'dotenv'
dotenv.config()

app.get('/',(req:Request,res:Response)=>{
    res.send("hello world!!")
})

app.use('/user',newuser)
app.use('/user',login)

app.use('/user',authenticate,posts)




app.listen(3000,()=>{
    console.log("app connected to port 3000")
})
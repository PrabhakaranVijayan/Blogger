import express,{Request,Response} from "express"
const app= express();
const newuser= require('./routes/signup')
app.use(express.json())
const login= require('./routes/signin')

app.get('/',(req:Request,res:Response)=>{
    res.send("hello world!!")
})

app.use('/user',newuser)
app.use('/user',login)




app.listen(3000,()=>{
    console.log("app connected to port 3000")
})
export default function Signup(){
    return(
        <div className="border w-1/4 flex  justify-center items-center h-64 rounded mx-auto my-10  ">
            <div className=" flex flex-col justify-center h-full space-y-4">
             <input type="text" placeholder="username" className="border "></input>
             
             <input type="text" placeholder="E-mail Id" className="border "></input>
             
             <input type="text" placeholder="password" className="border"></input>
             
             <button  className="border rounded inline-block ">signup</button>
            </div>
        </div>
    )
}
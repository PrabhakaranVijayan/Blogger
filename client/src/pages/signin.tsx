export default function Signin(){
    return(
        <div className=" flex justify-center items-center h-screen w-screen bg-lime-100 ">
        <div className=" border-2 w-1/3 h-1/2 border-lime-700 flex flex-col justify-center p-10 pt-20 space-y-5 rounded">
         
         <input type="text" placeholder="E-mail Id" className="border rounded py-1 pl-3"></input>
         
         <input type="text" placeholder="password" className="border rounded py-1 pl-3"></input>
         <div className="flex justify-center">
          <button  className="border rounded w-fit px-2 py-0.5">signin</button>
          

         </div>
         
        </div>
    </div>
    )
}
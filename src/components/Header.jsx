import { useState } from "react"
function Header(){
  const [open,setOpen] = useState(false)
  //menubtn
  const menubtn = ()=>{
    setOpen(true)
  }
  //closebtn
  const closebtn =()=>{
    setOpen(false)
  }
  return <div className="sm:flex p-[10px] bg-[#FE7235] py-5 text-white justify-between ">
    <h1 className=" font-bold text-4xl"><span class="text-black">Tech</span>bookie</h1>
    <i style={{display:open==true ? "block":""}} onClick ={closebtn} class="fa-solid fa-x  hidden  absolute right-3 top-7 text-4xl"></i>
    <i style={{display:open == true ? "none" :""}} onClick={menubtn} class="  text-4xl fa-solid fa-bars sm:hidden absolute right-3 top-7"></i>
    <ul style={{display:open == true ? "block" :""}} className=" hidden sm:flex sm:flex-row flex-col  justify-between list-none gap-4 mt-10 sm:mt-0 sm:gap-8  text-3xl  ">
      <li>Home</li>
      <li>Pricing</li>
      <li>About us</li>
      </ul>
      <div  style={{display:open == true ? "block" :""}}  className=" hidden sm:flex-row  justify-start sm:flex flex-col  gap-4 text-3xl">
      <button className="text-white mt-4 bg-[#fe7235] rounded sm:mt-0 hover:underline ">login in</button><br></br>
      <button className="bg-white mt-4 rounded sm:mt-0 text-black w-[150px] h-[50px]  hover:bg-[#fe7235] hover:border-2 border-white ">Register</button>
      </div>
  </div>
}
export default Header
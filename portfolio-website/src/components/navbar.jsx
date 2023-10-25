import React, { useState } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa';
import {Link} from "react-scroll";

const Navbar = () => {
    const [val,setval]=useState(true)
    const list_of_items=[{id:1,item:"Home"},{id:1,item:"About"},{id:1,item:"Portfolio"},{id:1,item:"Experience"},{id:1,item:"Contact"}]
  return (
    
        <div className="flex bg-black justify-between w-full h-14 text-white items-center fixed">

            <div className="flex text-[26px] font-Peralta cursor-pointer items-center text-gray-400"  >
            Saim Asif 
            </div >
            <div className="hidden md:flex space-x-6 mx-5 text-gray-400">
            {list_of_items.map(({id,item})=>{return <div key={id} className='cursor-pointer'><Link to={item} smooth duration={500}>{item}</Link></div>})}
           
            </div>
            <div className="md:hidden cursor-pointer space-y-1 mx-2 z-10" onClick={()=>{setval(!val)}}>
            {val?<FaBars size={30} className='h-7 mx-2 text-gray-500'></FaBars>:<FaTimes size={30} className='h-7 mx-2 text-gray-500'></FaTimes>}  </div>
           
            {!val && (<div className='flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {list_of_items.map(({id,item})=>{return <div className="cursor-pointer text-4xl py-4" key={id}>{item}</div>})}
                </div>)}
                       
            


</div>
    
  )
}

export default Navbar
import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
// import demo from "./demo-image.jpeg"
import demo from "./portfolio-image.jpg"
const Home = () => {
  return (
    
    
    <div name="home" className='h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='h-full mx-auto max-w-screen-lg flex flex-col md:flex-row justify-center items-center px-4'>
    
            <div className='flex flex-col justify-center  h-full'> 
                <h1 className=' text-white text-4xl sm:text-7xl  font-bold max-w-2xl '>I am a Full Stack Developer</h1> 
                <p className='text-xl text-gray-500 py-4 max-w-md'> 
                I am a passionate front-end developer with a strong proficiency in turning concepts
                 into efficient, user-friendly interfaces.I have honed
                 my skills in HTML, CSS, JavaScript, and various front-end frameworks to create seamless, 
                 visually appealing websites and web applications.


    
                 </p>
                 <div><button className='group text-2xl bg-cyan-700 rounded-md flex px-2 py-2'>Portfolio<span className='justify-center items-center py-1 group-hover:rotate-90 duration-500'><MdOutlineKeyboardArrowRight/></span></button>
                 </div> 
                
                
            </div>
            <div><img className="w-full md:w-full h-[280px] px-2 rounded-2xl" src={demo} alt="demo"></img></div>
        </div>
        </div>    

  )
}

export default Home

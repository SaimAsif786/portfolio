import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {TiSocialLinkedin} from 'react-icons/ti';
const Links = () => {
    const social=[
        {id:1,
            name:"github",
            href:"https://github.com/SaimAsif786",
        icons:(<><AiFillGithub size={30} className='mx-3'></AiFillGithub></>)
        },
        {id:2,
            name:"linkdin",
            href:"https://www.linkedin.com/in/muhammad-saim-asif-049722212/",
        icons:(<><TiSocialLinkedin size={30} className='mx-3 ' ></TiSocialLinkedin></>)},
        {id:3,
        name:"Resume",
        href:"/resume.pdf",
        download:true,
    icons:(<><BsFillPersonLinesFill size={30} className='mx-3'></BsFillPersonLinesFill></>)}
    ]
  return (
    <div className='hidden mt-8 h-fit lg:flex flex-col absolute top-[30%] left-[-150px] '>
        {social.map(({id,name,icons,href,download})=>{

       return  <div key={id}  className='flex justify-end text-2xl text-slate-600 w-[200px] bg-slate-100  hover:translate-x-[110px] duration-300'><a href={href} download={download} target="_blank" rel="noreferrer">{name}</a><>{icons}</></div>
        })}
    </div>
  )
}

export default Links
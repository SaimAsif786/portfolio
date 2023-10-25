import React from 'react';

import project1 from './project1.jpeg'
import project2 from './project2.jpeg'
import project3 from './project3.jpeg'

const Portfolio = () => {
    const portfolio_projects=[{
        id:1,
        pic:project1,
        name:"Newsapp"
    },
    {
        id:2,
        pic:project2,
        name:"Wordcounter"
    },
    {
        id:3,
        pic:project3,
        name:"Facebook sign-in page"
    },
  
  ]
    return (
    
    <div className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white'>
        <div className='h-full mx-auto p-4 justify-center w-full max-w-screen-lg  flex-col flex '>
    
        <div><p className='text-white  text-4xl inline border-b-4'>Portfolio</p></div>
        <p className='text-white pt-8 pb-6'>These are my projects</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
           { portfolio_projects.map(({id,pic,name})=>{

            return <div className='shadow-gray-600 shadow-md w-fit'><img key={id} className='rounded-md duration-200 hover:scale-105 w-60'  src={pic} alt="its my demo pic"></img><div className='flex justify-start'><button className='px-6 py-2 mb-2 bg-blue-800 mt-3 rounded'>{name}</button> </div></div>
            })}
            
        </div>
         
        </div>
    </div>

  )
}

export default Portfolio
import React from 'react'

const projects=[
  {
    title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
  {
     title:"Toso app",
    descriptiom:"A simple React todo list with add/delete nad localstorage"
  },
]

function Projects() {
  return (
    <div className='p-6 '>
      <h2 className='text-2xl font-bold mb-4 text-center'>My Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
       
       {
        projects.map((proj,index)=>(
          <div key={index} className='bg-white rounded-xl p-4 shadow-md border hover:shadow-xl transition duration-300 cursor-pointer'>
            <h3 className='text-lg font-semibold mb-2'>{proj.title}</h3>
            <p className='text-gray-600'>{proj.descriptiom}</p>
            </div>

        ))
       }
      </div>  
    </div>
  )
}

export default Projects 
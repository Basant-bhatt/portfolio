import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './portfolio pages/Home'
import About from './portfolio pages/About'

import Projects from './portfolio pages/Projects'
import Navbar from './components/Navbar'
import Info from './portfolio pages/Info'


function App() {
return(
  <>

  <Navbar/>
  <div className='p-5'>

  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/info' element={<Info/>}/>
    <Route path='projects' element={<Projects/>}/>

  </Routes>

  <footer className='text-center py-4 bg-gray-100 text-sm text-gray-600'>
    <p>Contact with me</p>
    <div className='flex justify-center gap-4 mt-2'>
      <a href="https://github.com/Basantbhatt" target="_blank"
      rel='noreferrer' className='hover:underline'>Github</a>

      <a href="https://linkedin.com/in/Basantbhatt" target="_blank"
      rel='noreferrer' className='hover:underline'>Linkedin</a>

      <a href="basantbhatt7060@gmail.com" className='hover:underline'>Email</a>
    </div>
    <p className='mt-2'>{String.fromCharCode(169)} {new Date().getFullYear()} Basant bhatt</p>
  </footer>
  
  </div>
  </>
)

}

export default App








































































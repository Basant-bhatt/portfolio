import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='px-5 py-2 bg-[#eee] flex gap-15 justify-center' >

      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/projects"}>Projects</Link>
    </nav >
  )
}

export default Navbar
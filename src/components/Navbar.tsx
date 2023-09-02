import React from 'react'
import { navLinks } from '../constants/NavItems'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='w-screen h-11 bg-gray-900 text-white'>
        hello
        <ul className='flex gap-2'>
            {
                navLinks.map((item)=>(
                    <li key={item.id}>
                        <Link to={'/'} >{item.label}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar

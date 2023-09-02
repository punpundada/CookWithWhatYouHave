import React from 'react'
import { navLinks } from '../constants/NavItems'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='w-screen h-11 bg-gray-900 text-white'>
        <ul className='flex gap-8 p-2 text-lg ms-6 '>
            {
                navLinks.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.path} >{item.label}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar

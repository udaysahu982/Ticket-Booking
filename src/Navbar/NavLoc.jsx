import React from 'react'
import './navbar.css'
import {  MapPin } from "lucide-react";


const NavLoc = () => {
  return (
    <div className=' w-52 h-20 sm:h-19 flex items-center justify-around  '  >        
          <MapPin color='blue ' size={20} />
          <div className=' '>
        <h3 className=" text-xl sm:text-lg font-semibold sm:text-gray-800">
          Bhopal
        </h3>
        <p className=" text-sm sm:text-sm text-gray-500 font-mono font-bold">
          Bhopal, Madhya Pradesh
        </p>
         </div>
          </div>
  )
}

export default NavLoc

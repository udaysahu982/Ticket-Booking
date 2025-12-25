import React from 'react'
import './navbar.css'
import {  MapPin } from "lucide-react";


const NavLoc = () => {
  return (
    <div className=' flex items-center justify-around navLoc '  >        
          <MapPin color='blue 'size={32} />
          <div >
        <h3 className=" text-4xl sm:text-lg font-semibold sm:text-gray-800 nav-loc">
          Bhopal
        </h3>
        <p className="text-2xl sm:text-sm text-gray-500 font-semibold">
          Bhopal, Madhya Pradesh
        </p>
         </div>
          </div>
  )
}

export default NavLoc

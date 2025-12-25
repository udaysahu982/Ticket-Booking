import React from 'react'
import "../index.css"
import {  MapPin } from "lucide-react";
import Search from './Search';
import ListOpt from './ListOpt';
import NavLoc from './NavLoc';
import Logo from './Logo';
import UserBtn from './UserBtn';


const Navbar = () => {
  return (
   <>

   <div className='h-35 sm:h-19 border flex justify-between '>
    <div className=' w-96 h-35 sm:h-19 flex'><Logo/><NavLoc/></div>
    <div className='w-290  h-35 sm:h-19 flex items-center justify-between '> <ListOpt/>
    <div className='w-200 h-35 sm:h-19  flex justify-end items-center'> 
    <div className='w-150  h-35 sm:h-19 flex gap-8 justify-end items-center' > <Search/>  <UserBtn/>  </div> 

    </div>
    </div>
    </div>
   </>
  )
}

export default Navbar

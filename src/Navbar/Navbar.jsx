import React from 'react'
import "../index.css"
import {  MapPin } from "lucide-react";
import Search from './Search';
import ListOpt from './ListOpt';
import NavLoc from './NavLoc';
import Logo from './Logo';
import UserBtn from './UserBtn';
import { Link } from 'react-router-dom'
import LocationSearch from '../PopWindows/LocationSearch';

const Navbar = () => {
  return (
   < div className='md:w-380'>

   <div className='h-20  md:h-19  flex justify-between '>
    <div className=' md:w-96 h-20 md:h-19 flex'><Logo/><NavLoc /></div>
    <div className=' md:w-290 h-19 flex items-center justify-between '><div className='hidden md:block'><ListOpt/></div> 
    
    <div className=' md:w-150 w-20 h-20 md:h-19 flex md:gap-8 justify-end items-center' > <div className='hidden sm:flex md:w-100'><Search /></div> <UserBtn/>   </div> 

    </div>
    </div>
    <div className='w-full h-22 border items-center md:hidden'><ListOpt/></div>
    <div className='md:hidden border w-full h-16 flex items-center justify-center'><div style={{width:"95%"}}><Search /></div></div>
    
   </ div>
  )
}

export default Navbar

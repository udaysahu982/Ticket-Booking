import React from 'react'
import "../index.css"
const Navbar = () => {
  return (
   <>

   <div className='border h-19 flex justify-between '>
    <div className='border w-96 h-19 flex'>
      <div className='border text-3xl flex items-center justify-center' style={{width:"40%"}}>LOGO</div>
      <div className='border' style={{width:"60%"}}>  </div>
     

    </div>
    <div className='w-290 border h-19 flex items-center justify-between '>
    <ul className='flex  gap-10 font-medium w-120 justify-center ' style={{fontSize:"1.3rem"}}>
      <li>For you</li>
      <li>Dining</li>
      <li>Movies</li>
      <li>Events</li>
    </ul>
    <div className='w-200 h-19 border flex justify-end items-center'>
      <div className='w-150 border h-19 flex gap-8 justify-end items-center' >

      <div className='w-100 border h-11 flex' style={{borderRadius:"10px"}}>
        <img style={{width:"10%", height:"100%", }} src="./searchicon.svg" alt="" srcset="" />
        <input type="text" placeholder='Search for a movie' name="search" id="" style={{width:"90%", height:"100%", border:"none", fontSize:"1rem", fontFamily:"sans-serif", borderRadius:"10px"}} />
        </div>
     
      <div className='border w-12 h-12 ' style={ {borderRadius:"100%", marginRight:"20px", background:"url('./usericon.svg')"}}></div>
      
      </div>
      <div></div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Navbar

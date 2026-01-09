import React from 'react'
import { Link } from 'react-router-dom'
import Movies from '../Movies/Movies'
import Events from '../Events/Events'
import Dining from '../Dining/Dining'
import Foryou from '../ForYou/Foryou'
import { Clapperboard, Wine,Guitar,WandSparkles  } from 'lucide-react';


const ListOpt = () => {
  return (
   <>
    <ul className=' flex md:flex gap-7 md:h-auto md:gap-10 font-medium md:w-120 justify-center ' style={{fontSize:"1.3rem" }}>
      <li className='cursor-pointer '> <Link to="/foryou" ><WandSparkles className='md:hidden'  size={50} strokeWidth={1}/> For you</Link></li>

      <li className='cursor-pointer'> <Link to="/dining" ><Wine className='md:hidden' size={50} strokeWidth={1}/> Dining</Link></li>
      <li className='cursor-pointer'><Link to="/"><Clapperboard className='md:hidden'  size={50} strokeWidth={1}/>  Movies</Link></li>
      <li className='cursor-pointer'><Link to="/events"> <Guitar className='md:hidden' size={50} strokeWidth={1}/> Events</Link></li>
    </ul></>
  )
}

export default ListOpt

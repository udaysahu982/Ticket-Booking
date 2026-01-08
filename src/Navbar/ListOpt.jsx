import React from 'react'
import { Link } from 'react-router-dom'
import Movies from '../Movies/Movies'
import Events from '../Events/Events'
import Dining from '../Dining/Dining'
import Foryou from '../ForYou/Foryou'


const ListOpt = () => {
  return (
   <>
    <ul className=' flex lg:flex  gap-10 font-medium w-120 justify-center ' style={{fontSize:"1.3rem" }}>
      <li className='cursor-pointer'> <Link to="/foryou"> For you</Link></li>
      <li className='cursor-pointer'><Link to="/dining"> Dining</Link></li>
      <li className='cursor-pointer'><Link to="/"> Movies</Link></li>
      <li className='cursor-pointer'><Link to="/events"> Events</Link></li>
    </ul></>
  )
}

export default ListOpt

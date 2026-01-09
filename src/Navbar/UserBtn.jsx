import React from 'react'
import { UserRound } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const UserBtn = () => {
  return (
    <Link to='/user'>
     <div className=' w-18 h-16 sm:w-14 sm:h-14 flex justify-center items-center bg-gray-200'  style={ {borderRadius:"100%", marginRight:"10px"}}>
    <UserRound className='w-2/3 h-2/3'/>
     </div>
    </Link>
     
  )
}

export default UserBtn

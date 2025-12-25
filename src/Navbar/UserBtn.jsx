import React from 'react'
import { UserRound } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const UserBtn = () => {
  return (
     <div className=' w-18 h-18 sm:w-12 sm:h-12 flex justify-center items-center bg-gray-200'  style={ {borderRadius:"100%", marginRight:"20px"}}>
    <UserRound className='w-2/3 h-2/3' />
     </div>
     
  )
}

export default UserBtn

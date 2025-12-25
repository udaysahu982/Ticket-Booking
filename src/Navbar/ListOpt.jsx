import React from 'react'


const ListOpt = () => {
  return (
   <>
    <ul className='hidden lg:flex  gap-10 font-medium w-120 justify-center ' style={{fontSize:"1.3rem" }}>
      <li className='cursor-pointer'>For you</li>
      <li className='cursor-pointer'>Dining</li>
      <li className='cursor-pointer'>Movies</li>
      <li className='cursor-pointer'>Events</li>
    </ul></>
  )
}

export default ListOpt

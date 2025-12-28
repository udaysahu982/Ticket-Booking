import React from 'react'
import './swiper.css';
const SwiperCont = () => {
  return (
    <div className='w-full h-full swipbg-dhur' 
   >
        <div className='w-full h-full hidden md:flex justify-around' style={{background:"rgba(255, 255, 255, 0.89)"}}>
          <div className=' w-2xl flex flex-col items-start justify-center gap-3' >
            <h1 className='font-bold text-5xl mb-2.5'>Dhurandar</h1>
            <div className='text-3xl font-semibold'>A | Action, Thriller</div>
            <button className=' w-45 h-16 text-2xl font-medium rounded-2xl text-white' style={{background:"rgba(30,30,32)"}}>Book Now</button>
          </div>
          <div className=' w-90 flex items-center justify-center'>
            <div className='swipbg'></div>
          </div>
            
        </div>

      
    </div>
  )
}

export default SwiperCont

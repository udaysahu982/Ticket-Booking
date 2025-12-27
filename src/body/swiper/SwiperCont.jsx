import React from 'react'
import './swiper.css';
const SwiperCont = () => {
  return (
    <div className='w-full h-full swipbg-dhur' 
   >
        <div className='w-full h-full hidden md:flex justify-around' style={{background:"rgba(255, 255, 255, 0.95)"}}>
          <div className=' w-2xl flex flex-col items-center justify-center gap-3' >
            <h1 className='font-bold text-5xl mb-2.5'>Dhurandar</h1>
            <div className='text-3xl font-semibold'>A | Action, Thriller</div>
            <button className=' w-xs h-14 text-2xl font-medium rounded-2xl text-white bg-slate-950'>Book Now</button>
          </div>
          <div className=' w-90 flex items-center justify-center'>
            <div className='swipbg'></div>
          </div>
            
        </div>

      
    </div>
  )
}

export default SwiperCont

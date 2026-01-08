import React from 'react'
import './swiper.css';
import { Link } from 'react-router-dom';


const SwiperCont = ({props}) => {




  return (
    <div className='w-full h-full swipbg-dhur'  style={{ backgroundImage: `url(${props.photo})` }}  >
      <Link to="/Booking">
        <div className='w-full h-full hidden md:flex justify-around' style={{background:"rgba(255, 255, 255, 0.89)"}}>
          <div className=' w-2xl flex flex-col items-start justify-center gap-3' >
            <h1 className='font-bold text-5xl mb-2.5'>{props.movieName}</h1>
            
            <div className='text-3xl font-semibold'>{props.movieTitle}</div>
            <Link className=' w-45 h-16 text-2xl font-medium rounded-2xl text-white flex items-center justify-center' style={{background:"rgba(30,30,32)"}} to='/Booking'> Book Now</Link>
          </div>
          <div className=' w-90 flex items-center justify-center'>
            <div className='swipbg' ><img src={props.photo1} alt="" style={{width:"100%", height:"100%"}} /></div>
          </div>
            
        </div>
      </Link>

      
    </div>
  )
}

export default SwiperCont

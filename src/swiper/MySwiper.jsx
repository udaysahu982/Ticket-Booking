// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './swiper.css';
import SwiperCont from './SwiperCont';

const MySwiper = () => {

  let imgObj={
    photo:"dhurandar.jpg",
    photo1:"dhurandar1.jpg",
    movieName:"Dhurandar",
    movieTitle:"A | Action, Thriller"
  }
  
   let imgObj1={
    photo:"avatar.jpg",
    photo1:"avatar1.jpg",
    movieName:"Avatar",
    movieTitle:"UA 16+ | Action, Adventure +2 more"
  }
   let imgObj2={
    photo:"ikkis.jpg",
    photo1:"ikkis1.jpg",
    movieName:"Ikkis",
    movieTitle:"A | Drama, Action +2 more"
  }

  return (
   
    <div className='w-92.7 h-70 md:h-150  md:swiper-box-container'>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        } }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
        
      >
        
        <SwiperSlide> <SwiperCont props={imgObj} /> </SwiperSlide>
        <SwiperSlide><SwiperCont props={imgObj1}/></SwiperSlide>
        <SwiperSlide><SwiperCont props={imgObj2}/></SwiperSlide>
        
        
      </Swiper>
     </div>
    
  )
}

export default MySwiper

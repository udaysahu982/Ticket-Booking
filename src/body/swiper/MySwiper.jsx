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
  return (
   
    <div className='w-92.7 h-50 md:h-150  md:swiper-box-container'>

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
        
        <SwiperSlide> <SwiperCont/> </SwiperSlide>
        <SwiperSlide><SwiperCont/></SwiperSlide>
        <SwiperSlide><SwiperCont/></SwiperSlide>
        <SwiperSlide><SwiperCont/></SwiperSlide>
        <SwiperSlide><SwiperCont/></SwiperSlide>
        
      </Swiper>
     </div>
    
  )
}

export default MySwiper

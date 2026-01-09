import React from 'react'
import MySwiper from '../swiper/MySwiper'
import ExploreEvents from './ExploreEvents'

const Events = () => {

  let eventSwiper=[
    {
    id:100,
    photo:"/eventimg/eventimg.avif",
    photo1:"/eventimg/eventimgg.avif",
    movieName:"Ashish Solanki",
    movieTitle:"Standup Comedy",
  },
  {
    id:101,
    photo:"/eventimg/eventimgtour.avif",
    photo1:"/eventimg/eventimgtourr.avif",
    movieName:"Anubhav Singh Dassi",
    movieTitle:"Standup Comedy",
  },
  {
    id:102,
    photo:"/eventimg/eventimgsanam.avif",
    photo1:"/eventimg/eventimgsanamm.avif",
    movieName:"Sanam Live Concert",
    movieTitle:"Music",
  }
  ]


  return (
   
  <div>
    <MySwiper Data={eventSwiper}/>
    <ExploreEvents/>
  </div>
   
  )
}

export default Events

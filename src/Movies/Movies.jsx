import React from 'react'
import MySwiper from '../swiper/MySwiper'
import WeekRelease from './WeekRelease'
import AccordianSection from './AccordianSection'

const Movies = () => {

  let movieSwiper=[
    {
    id:0,
    photo:"movies/dhurandar.jpg",
    photo1:"movies/dhurandar1.jpg",
    movieName:"Dhurandar",
    movieTitle:"A | Action, Thriller",
  },
  {
    id:1,
    photo:"movies/avatar.jpg",
    photo1:"movies/avatar1.jpg",
    movieName:"Avatar",
    movieTitle:"UA 16+ | Action, Adventure +2 more"
  },
  {
    id:2,
    photo:"movies/ikkis.jpg",
    photo1:"movies/ikkis1.jpg",
    movieName:"Ikkis",
    movieTitle:"A | Drama, Action +2 more"
  }
  
  ]

  return (
    <>
      <MySwiper Data={movieSwiper}/>
      <WeekRelease/>     
      <AccordianSection/> 
    </>
  )
}

export default Movies

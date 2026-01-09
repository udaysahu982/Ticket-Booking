import React from 'react'
import BookingPageHead from './BookingPageHead.jsx'
import BookingPageBody from './BookingPageBody.jsx'
import { useParams } from 'react-router-dom'

const BookingPage = () => {
  let imgObj=[
    {
    id:0,
    photo:"/movies/dhurandar.jpg",
    photo1:"/movies//dhurandar1.jpg",
    movieName:"Dhurandar",
    movieTitle1:"Action",
    movieTitle2:"Thriller",
    movieTitle3:"Drama",
    movieAbout:"Dhurandar is a high-octane action thriller packed with intense drama, powerful performances, and edge-of-the-seat moments."
  },
  {
    id:1,
    photo:"/movies/avatar.jpg",
    photo1:"/movies//avatar1.jpg",
    movieName:"Avatar",
    movieTitle1:"Action",
    movieTitle2:"Adventure",
    movieTitle3:"Sci fi",
    movieAbout:"Avatar is a visually breathtaking epic that blends groundbreaking spectacle with a high-stakes emotional journey, plunging audiences into a battle for survival fueled by sacrifice and primal power."

  },
  {
    id:2,
    photo:"/movies/ikkis.jpg",
    photo1:"/movies//ikkis1.jpg",
    movieName:"Ikkis",
    movieTitle1:"Action",
    movieTitle2:"Adventure",
    movieTitle3:"Sci fi",
    movieAbout:"Ikkis is a gripping, soul-stirring war drama that honors extraordinary bravery with raw intensity, capturing a young soldier’s unbreakable spirit amidst the thunderous chaos of the 1971 battlefield."
  },
  {
    id: 3,
    photo:"/movies/tumera1.avif",
    photo1: "/movies/tumera.jpg",
    movieName:"Tu Meri Main Tera Main Tera Tu Mer",
    movieTitle1:"Romance",
    movieTitle2:"Adventure",
    movieTitle3:"Comedy",
    movieAbout:"Two people fall in love while finding themselves, but family pressures challenge their relationship."      
  },
  {
    id:4,
    photo:"/movies/Rajasaab1.avif",
    photo1:"/movies/Rajasaab.avif",
    movieName:"Raja Saab",
    movieTitle:"Standup Comedy",
    movieTitle1:"Comedy",
    movieTitle2:"Horror",
    movieTitle3:"Romantic",
    movieAbout:"A young heir embraces both his royal heritage and rebellious spirit as he rises to power, establishing unprecedented rules during his reign as Raja Saab."
  },
  {
    id:5,
    photo:"/movies/jananyagan.jpg",
    photo1:"/movies/jananayagan.avif",
    movieName:"Jana Nayagan",
    movieTitle:"Music",
     movieTitle1:"Adventure",
    movieTitle2:"Action",
    movieTitle3:"Drama",
    movieAbout:"A young heir embraces both his royal heritage and rebellious spirit as he rises to power, establishing unprecedented rules during his reign as Raja Saab."
  }
]

  const {id}=useParams()

  return (
    <>
    
      <BookingPageHead props={imgObj[id]}/>
      <BookingPageBody/>
    </>
  )
}

export default BookingPage

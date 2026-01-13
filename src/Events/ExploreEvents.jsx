import React from 'react'
import EventCard from './EventCard'
import MovieCard from '../Movies/MovieCard'
import { Link } from 'react-router-dom'




const ExploreEvents = () => {

  let event=[
  {
    id: 0,
    image: "https://i.pinimg.com/736x/2f/1f/38/2f1f38703df6306ed734e512aaad4b15.jpg",
    title: "Arijit Singh Live Concert",
    language: "Hindi",
    rating: "UA",
    duration: "3h 00m",
    genre: "Music Concert"
  },
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/f5/a8/f9/f5a8f9f787a2b4d652c40c452c2ce477.jpg",
    title: "Zakir Khan – Tathastu",
    language: "Hindi",
    rating: "UA",
    duration: "2h 00m",
    genre: "Stand-up Comedy"
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-Y9roE9D9N55EqVmuIoPUuJsdo_0B7qFVw&s",
    title: "Sunburn EDM Night",
    language: "English",
    rating: "A",
    duration: "4h 00m",
    genre: "Music Festival"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/M/MV5BMmFjNTZmOGMtODBjOS00MzlhLTlkZGItYWFjMGI0ZDJiNmNiXkEyXkFqcGc@._V1_.jpg",
    title: "Biswa Kalyan Rath Live",
    language: "Hindi",
    rating: "UA",
    duration: "1h 45m",
    genre: "Stand-up Comedy"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/54/91/56/54915684b599bbca7e59574bacfa31ea.jpg",
    title: "Indian Classical Music Evening",
    language: "Hindi",
    rating: "U",
    duration: "2h 30m",
    genre: "Classical Music"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/b1/68/e4/b168e4b5c1d0d93bf268135d688d45a0.jpg",
    title: "Open Mic Poetry Night",
    language: "Hindi",
    rating: "U",
    duration: "2h 00m",
    genre: "Poetry & Open Mic"
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiAPKGvIMHLtzUP9o-6xLf_fZHcYDIN9gxg&s",
    title: "Drama Play – Andha Yug",
    language: "Hindi",
    rating: "UA",
    duration: "2h 15m",
    genre: "Theatre"
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71U4bXy9ZML._AC_UF894,1000_QL80_.jpg",
    title: "DJ Night Bollywood Beats",
    language: "Hindi",
    rating: "A",
    duration: "3h 30m",
    genre: "DJ Party"
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/61B1z5M5wKL._AC_UF894,1000_QL80_.jpg",
    title: "Kids Magic Show",
    language: "Hindi",
    rating: "U",
    duration: "1h 30m",
    genre: "Family Event"
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/71bZ8cMZ7DL._AC_UF894,1000_QL80_.jpg",
    title: "Startup Networking Meetup",
    language: "English",
    rating: "U",
    duration: "2h 00m",
    genre: "Business & Networking"
  }
]



  // let music ="/music/Music.avif"
  // let nightlife="/music/nightlife.avif"
  // let comedy="/music/comedy.avif"
  // let sport="/music/sport.avif"

  return (
   <div className=" bg-gray-100 w-95 md:w-full md:h-160 md:flex md:justify-center md:items-center">
    <div className="  bg-white rounded-3xl md:w-370 md:h-140 md:flex md:flex-col md:justify-center md:items-center">

      <div className="border-b-2 h-20 md:w-full md:h-15 text-3xl md:text-4xl flex items-center pl-10 md:pl-18 font-semibold">New Release</div>
      <div className="md:h-135 md:w-full flex gap-10 overflow-x-auto  " style={{scrollbarWidth:"none"}}>
 
       {event.map((e,i)=>(<Link to={`/Eventbook/${e.id}`}><MovieCard key={i} movie={e} /></Link>))}

      </div>    
    </div>
    </div>
  )
}

export default ExploreEvents

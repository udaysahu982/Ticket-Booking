import React from 'react'
import MovieCard from './MovieCard'
import ikkis from '../assets/ikkis.avif'
import rajas from '../assets/Rajasaab.avif'
import janana from '../assets/jananayagan.avif'
import tumera from '../assets/tumera.jpg'


const WeekRelease = () => {



    let movies = [
        {
      id: 1,
      image: tumera,
      title: "Tu Meri Main Tera Main Tera Tu Meri",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action"
    },
    
    {
      id: 2,
      image: rajas,
      title: "Rajasaab",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action"
    },
    {
      id: 3,
      image: janana,
      title: "Jana Nyagan",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action"
    },
    {
      id: 4,
      image: ikkis,
      title: "Ikkis",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama"
    }
    
  ];

  return (
   <div className='border w-92 h-170 md:w-full md:h-170 flex justify-center' >
    <div className='border w-7xl ' >

   <div className='border w-full h-20 md:h-30 flex items-center text-3xl font-medium '>
        This Week's Releases
    </div>
     <div className='  border flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:flex-wrap md:overflow-x-visible'>
      {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))}
        
    </div>
    </div> 
   </div>
  )
}

export default WeekRelease

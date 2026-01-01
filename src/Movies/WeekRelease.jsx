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
    },
    {
      id: 5,
      image: "dhurandar1.jpg",
      title: "Dhurandar",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama"
    },
    {
      id: 6,
      image: "avatar.jpg",
      title: "Avatar",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama"
    }
    
  ];

  return (
  //  <div className='border w-89.5 h-160 md:w-full md:h-170 flex justify-center' >
  //   <div className='border w-7xl md:h-150' >

  //  <div className='border w-full h-20 md:h-30 flex items-center text-3xl font-medium '>
  //       This Week's Releases
  //   </div>
  //    <div className='  border flex gap-5 w-89.5 md:w-7xl md:flex-wrap md:overflow-x-visible h-120 items-center'
  //      style={{overflowX:"scroll "}}>
  //     {movies.map((movie)=>(
  //       <MovieCard key={movie.id} movie={movie}/>
  //     ))}
        
  //   </div>
  //   </div> 
  //  </div>

  <section className="w-full px-4 md:px-12 py-6">

      {/* Section Title */}
      <h2 className="text-xl md:text-3xl font-semibold mb-4">
        Now in Cinemas
      </h2>

      {/* Movie Cards Container */}
      <div
        className="
          flex gap-4 overflow-x-auto
    snap-x snap-mandatory
    md:grid md:grid-cols-2 md:gap-4
    lg:grid-cols-4
    md:overflow-visible
        "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </section>

  )
}

export default WeekRelease

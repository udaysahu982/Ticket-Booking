import React from "react";
import MovieCard from "./MovieCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";

const WeekRelease = () => {
  const movies = [
    {
      id: 3,
      image: "/movies/tumera.jpg",
      title: "Tu Meri Main Tera",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action",
    },
    {
      id: 4,
      image: "/movies/Rajasaab.avif",
      title: "Rajasaab",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action",
    },
    {
      id: 5,
      image: "/movies/jananayagan.avif",
      title: "Jana Nayagan",
      language: "Hindi",
      rating: "UA",
      duration: "2h 05m",
      genre: "Action",
    },
    {
      id: 2,
      image: "/movies/ikkis1.jpg",
      title: "Ikkis",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama",
    },
    {
      id: 0,
      image: "/movies/dhurandar1.jpg",
      title: "Dhurandar",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama",
    },
    {
      id: 1,
      image: "/movies/avatar1.jpg",
      title: "Dhurandar",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama",
    },
    {
    id: 6,
    image: "https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    title: "Jungle Cruise",
    language: "English",
    rating: "UA",
    duration: "2h 41m",
    genre: "Action"
  },
  {
    id: 7,
    image: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    title: "Spiderman Home Comming",
    language: "English",
    rating: "A",
    duration: "3h 00m",
    genre: "Drama"
  },
    
  ];
  
  let movies1=[
    {
    id: 8,
    image: "https://m.media-amazon.com/images/M/MV5BNzU2MzNkN2MtYTk1OS00YWM1LTg3YjItOTQ0MjAxN2YyYmRlXkEyXkFqcGc@._V1_FMjpg_UX1125_.jpg",
    title: "John Wick: Chapter 4",
    language: "English",
    rating: "A",
    duration: "2h 49m",
    genre: "Action"
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/M/MV5BNmFjMTJiZWYtY2QzYi00NjQyLWIxY2EtNjU3NzYzYWI3NTI3XkEyXkFqcGc@._V1_.jpg",
    title: "Akhanda 2: Thaandavam",
    language: "Hindi",
    rating: "UA",
    duration: "3h 12m",
    genre: "Sci-Fi"
  },
  {
    id: 10,
    image: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    title: "Spider-Man: No Way Home",
    language: "English",
    rating: "UA",
    duration: "2h 28m",
    genre: "Action"
  },
  {
    id: 11,
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    title: "The Dark Knight",
    language: "English",
    rating: "UA",
    duration: "2h 32m",
    genre: "Action"
  },
  {
    id: 12,
    image: "https://image.tmdb.org/t/p/original/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    title: "Super Pets",
    language: "English",
    rating: "UA",
    duration: "2h 29m",
    genre: "Action"
  },
  {
    id: 13,
    image: "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    title: "Wonder Woman",
    language: "English",
    rating: "UA",
    duration: "2h 21m",
    genre: "Fantasy"
  },
  {
    id: 14,
    image: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    title: "Interstellar",
    language: "English",
    rating: "UA",
    duration: "2h 49m",
    genre: "Sci-Fi"
  }
  ]

  return (
    <>
    <div className=" bg-gray-100 w-95 md:w-full md:h-160 md:flex md:justify-center md:items-center">
    <div className="  bg-white rounded-3xl md:w-370 md:h-140 md:flex md:flex-col md:justify-center md:items-center">

      <div className="border-b-2 h-20 md:w-full md:h-15 text-3xl md:text-4xl flex items-center pl-10 md:pl-18 font-semibold">New Release</div>
      <div className="md:h-135 md:w-full flex gap-10 overflow-x-auto  " style={{scrollbarWidth:"none"}}>

       {movies.map((e,i)=>(<MovieCard key={i} movie={e} />))}

      </div>    
    </div>
    </div>

     <div className=" bg-gray-100 w-95 md:w-full md:h-160 md:flex md:justify-center md:items-center">
    <div className="  bg-white rounded-3xl md:w-370 md:h-140 md:flex md:flex-col md:justify-center md:items-center">

      <div className="border-b-2 h-20 md:w-full md:h-15 text-3xl md:text-4xl flex items-center pl-10 md:pl-18 font-semibold">Must Watch</div>
      <div className="md:h-135 md:w-full flex gap-10 overflow-x-auto  " style={{scrollbarWidth:"none"}}>

       {movies1.map((e,i)=>(<MovieCard key={i} movie={e} />))}

      </div>    
    </div>
    </div>
    
    </>
  );
};

export default WeekRelease;

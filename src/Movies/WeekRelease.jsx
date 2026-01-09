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
    ,{
      id: 0,
      image: "/movies/dhurandar1.jpg",
      title: "Dhurandar",
      language: "Hindi",
      rating: "UA",
      duration: "2h 10m",
      genre: "Drama",
    },
  ];
  

  return (
    <div className=" bg-gray-100 w-95 md:w-full md:h-160 md:flex md:justify-center md:items-center">
    <div className="  bg-white rounded-3xl md:w-370 md:h-140 md:flex md:flex-col md:justify-center md:items-center">

      <div className="border-b-2 h-20 md:w-full md:h-15 text-3xl md:text-4xl flex items-center pl-10 md:pl-18 font-semibold">New Release</div>
      <div className="md:h-135 md:w-full flex gap-10 overflow-x-auto  " style={{scrollbarWidth:"none"}}>

       {movies.map((e,i)=>(<MovieCard key={i} movie={e} />))}

      </div>
    </div>
    </div>
  );
};

export default WeekRelease;

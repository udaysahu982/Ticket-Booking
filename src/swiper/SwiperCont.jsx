import React from "react";
import "./swiper.css";
import { Link } from "react-router-dom";

const SwiperCont = ({ props }) => {
  return (

    <div
      className="w-full h-full swipbg-dhur"
      style={{ backgroundImage: `url(${props.photo})` }}
    >
      {/* ================= DESKTOP VIEW ================= */}
      <Link to={`/Booking/${props.id}`}>
        <div
          className="hidden md:flex w-full h-full justify-around"
          style={{ background: "rgba(255, 255, 255, 0.6)" }}
        >
          <div className="w-2xl flex flex-col items-start justify-center gap-3">
            <h1 className="font-bold text-5xl mb-2.5">
              {props.movieName}
            </h1>

            <div className="text-3xl font-semibold">
              {props.movieTitle}
            </div>

            <div
              className="w-45 h-16 text-2xl font-medium rounded-2xl text-white flex items-center justify-center"
              style={{ background: "rgba(30,30,32)" }}
             
            >
              Book Now
            </div>
          </div>

          <div className="w-90 flex items-center justify-center">
            <div className="swipbg">
              <img
                src={props.photo1}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* ================= MOBILE VIEW ================= */}
      <Link to={`/Booking/${props.id}`} className="md:hidden block w-full h-full">
        <img
          src={props.photo1}
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default SwiperCont;

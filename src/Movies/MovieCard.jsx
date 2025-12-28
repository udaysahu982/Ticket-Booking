import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./MoviesCard.css";

const MovieCard=(data)=> {
  const cardRef = useRef(null);

  useEffect(() => {
    // Load animation
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.06,
      boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
      duration: 0.3
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3
    });
  };

  return (
    <div
      className="movie-card"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={data.movie.image}
        alt="Movie Poster"
        className="movie-img"
      />

      <div className="movie-info">
        <h3 className="movie-title">{data.movie.title}</h3>

        <div className="movie-meta">
          <span className="language">{data.movie.language}</span>
          <span className="rating ua">{data.movie.rating}</span>
        </div>

        <p className="movie-extra">{data.movie.duration} • {data.movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;

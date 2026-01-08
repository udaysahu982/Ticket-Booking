import { useEffect, useRef } from "react";
import { Heart, Share2, Play } from "lucide-react";
import gsap from "gsap";
import RateNow from "./RateNow";

const BookingPageHead = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[75vh] md:min-h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: "url(dhurandar.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 px-5 md:px-14 py-10 md:py-14 h-full"
      >
        {/* Poster */}
        <div className="w-44 md:w-64 shrink-0">
          <img
            src="dhurandar1.jpg"
            alt="Movie Poster"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Movie Info */}
        <div className="text-white max-w-3xl space-y-4 md:space-y-5">

          {/* Title & Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
              Dhurandar
            </h1>

            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Heart size={20} />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <RateNow />
            <span className="text-sm text-gray-300">
              120K+ ratings
            </span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-3">
            {["Action", "Thriller", "Drama"].map((genre) => (
              <span
                key={genre}
                className="px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <p className="text-lg text-gray-300">
            UA • 3h 30m • Hindi • 2D
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            Dhurandar is a high-octane action thriller packed with intense drama,
            powerful performances, and edge-of-the-seat moments.
          </p>

          {/* Trailer Button */}
          <button className="inline-flex items-center gap-2 mt-2 text-red-500 hover:text-red-400 font-medium">
            <Play size={18} />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingPageHead;

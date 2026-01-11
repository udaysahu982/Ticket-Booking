import axios from "axios";
import { X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let SearchModal = ({ onClose }) => {
  let [movieName, setMovieName] = useState("");
  let [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    if (movieName.trim() === "") {
      setSearchMovie([]);
      return;
    }

    let api = "http://localhost:3000/movielist";

    axios
      .get(api)
      .then((res) => {
        //  case-insensitive filtering
        let filteredMovies = res.data.filter((movie) =>
          movie.movieName
            .toLowerCase()
            .includes(movieName.toLowerCase())
        );

        setSearchMovie(filteredMovies);
      })
      .catch((err) => console.log(err));
  }, [movieName]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-start pt-24">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative">

        {/* ---------- Header ---------- */}
        <div className="flex items-center gap-3 p-4 border-b">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full outline-none text-lg"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>

        {/* ---------- Content ---------- */}
        <div className="p-6 space-y-4">

          {/* ✅ Show Popular only when NOT searching */}
          {movieName === "" && (
            <>
              <h3 className="text-sm font-semibold text-gray-500">
                Popular Searches
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <SearchCard title="Dhurandar" category="Movie" id="0" onClose={onClose} />
                <SearchCard title="Avatar" category="Movie" id="1"  onClose={onClose} />
                <SearchCard title="Ikkis" category="Movie" id="2" onClose={onClose} />
                <SearchCard title="Raja Saab" category="Movie" id="4" onClose={onClose} />
              </div>
            </>
          )}

          {/* ✅ Search Results */}
          {movieName !== "" && (
            <div className="grid grid-cols-2 gap-4">
              {searchMovie.length > 0 ? (
                searchMovie.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} onClose={onClose} />
                ))
              ) : (
                <p className="text-gray-500 col-span-2">
                  No movies found
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MovieCard = ({ movie, onClose }) => (
  <Link to={`/Booking/${movie.id}`}
  onClick={onClose}
  >
  <div className="flex gap-3 p-3 border rounded-xl hover:bg-gray-100 cursor-pointer transition">
    <img
      src={movie.photo}
      alt={movie.movieName}
      className="w-16 h-20 rounded-md object-cover"
    />
    <div>
      <p className="font-semibold">{movie.movieName}</p>
      <p className="text-xs text-gray-500">
        {movie.movieTitle1}, {movie.movieTitle2}
      </p>
    </div>
  </div>
  </Link>
);

const SearchCard = ({ title, category, id, onClose }) => (
  <Link to={`/Booking/${id}`}
    onClick={onClose}
  >
  <div className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
      🎬
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <span className="text-xs text-gray-500">{category}</span>
    </div>
  </div>
  </Link>
);

export default SearchModal;

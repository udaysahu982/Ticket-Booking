import React from "react";

const MovieLoader = () => {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row items-center gap-8 animate-pulse">

        {/* Poster Skeleton */}
        <div className="w-40 h-60 md:w-56 md:h-80 bg-gray-700 rounded-xl shadow-lg" />

        {/* Content Skeleton */}
        <div className="space-y-4 w-72 md:w-96">
          <div className="h-8 bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-700 rounded w-1/2" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />

          {/* Genre Pills */}
          <div className="flex gap-3 mt-4">
            <div className="h-6 w-16 bg-gray-700 rounded-full" />
            <div className="h-6 w-16 bg-gray-700 rounded-full" />
            <div className="h-6 w-16 bg-gray-700 rounded-full" />
          </div>

          {/* Button */}
          <div className="h-10 w-40 bg-red-600/40 rounded mt-6" />
        </div>
      </div>
    </div>
  );
};

export default MovieLoader;

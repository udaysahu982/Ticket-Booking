import React from "react";
import { X } from "lucide-react";

const Seat = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      {/* Seat Box */}
      <div className="w-[90%] md:w-[800px] bg-white rounded-xl shadow-2xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        {/* Screen */}
        <div className="text-center mb-6">
          <div className="w-full h-3 bg-gray-300 rounded-full mb-2"></div>
          <p className="text-sm text-gray-500">SCREEN THIS WAY</p>
        </div>

        {/* Seats */}
        <div className="grid grid-cols-8 gap-3 justify-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded bg-green-500 hover:bg-green-600 cursor-pointer"
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded"></span> Available
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-300 rounded"></span> Booked
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;

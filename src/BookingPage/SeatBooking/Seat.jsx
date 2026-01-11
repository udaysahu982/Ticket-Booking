import React, { useState } from "react";
import { X } from "lucide-react";
import SeatBookingScreen from "./SeatBookingScreen";
import SeatGrid from "./SeatGrid";
import { Navigate, useNavigate } from "react-router-dom";

const Seat = ({ onClose,bookingData,setBookingData }) => {

let navigate=useNavigate();

  let [selectedSeats,setSelectedSeats]=useState([])
  let bookedSeats=[""]

  
            
       let handleBooking=()=>{
    if (selectedSeats.length === 0) return;

  // Create updated booking data
  const updatedBookingData = { ...bookingData, Bookingseats: selectedSeats };

  // Update parent state (if needed)
  setBookingData(updatedBookingData);

  // Navigate and pass the updated data
  navigate("/bookingsummary", { state: { bookingData: updatedBookingData } });
         }              

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
      {/* Seat Container */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        {/* Screen */}
       <SeatBookingScreen/>

        {/* Seats */}
        <SeatGrid 
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        />

        {/* Info Panel */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Seat Info */}
          <div className="text-sm text-gray-600">
            <p>
              <span className="font-semibold">Selected Seats:</span> {selectedSeats.map((e)=>(e+","))}
            </p>
            
          </div>

          {/* Book Button */}
          <button
           className="w-full md:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition shadow"
           
           onClick={handleBooking}
           >
            Book Tickets
          </button>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-100 border border-green-500 rounded"></span>
            Available
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-300 rounded"></span>
            Booked
          </div>
        </div>

      </div>
    </div>
  );
};

export default Seat;

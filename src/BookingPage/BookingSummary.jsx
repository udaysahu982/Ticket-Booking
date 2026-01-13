import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData } = location.state || {}; // get data passed via navigate

  console.log(bookingData)

  if (!bookingData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">No booking data found.</p>
      </div>
    );
  }
  const seats = Array.isArray(bookingData.seats) ? bookingData.seats : [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">
          🎉 Booking Confirmed!
        </h1>

        {/* Movie Info */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Movie ID:</span>
            <span className="font-semibold text-gray-900">{bookingData.movieId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Movie Name:</span>
            <span className="font-semibold text-gray-900">{bookingData.movieName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Cinema:</span>
            <span className="font-semibold text-gray-900">{bookingData.cinemaName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Show Date:</span>
            <span className="font-semibold text-gray-900">{bookingData.Date} ({bookingData.Day})</span>
          
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Show Time:</span>
            <span className="font-semibold text-gray-900">{bookingData.showTime}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Seats:</span>
            <span className="font-semibold text-gray-900">{bookingData.Bookingseats.map((e)=>(e+" "))}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => alert("Download Ticket PDF feature coming soon!")}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

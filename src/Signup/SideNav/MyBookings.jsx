import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Film } from "lucide-react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("BookData"));

    //  Safety check
    if (Array.isArray(storedData)) {
      setBookings(storedData);
    } else if (storedData) {
      // if only ONE object exists, convert to array
      setBookings([storedData]);
    } else {
      setBookings([]);
    }
  }, []);

  const handleCancelBooking = (indexToRemove) => {
    const updatedBookings = bookings.filter(
      (_, index) => index !== indexToRemove
    );

    setBookings(updatedBookings);
    localStorage.setItem("BookData", JSON.stringify(updatedBookings));
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No active bookings.</p>
      ) : (
        <div className="space-y-5">
          {bookings.map((ticket, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow p-5 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-2">
                  {ticket.movieName}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Film size={14} /> Movie ID: {ticket.movieId}
                </p>
              </div>

              <div className="flex-1 space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Calendar size={16} />
                  {ticket.Date} ({ticket.Day})
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={16} />
                  {ticket.showTime}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {ticket.cinemaName}
                </p>

                <p>
                  <span className="font-medium">Seats:</span>{" "}
                  {ticket.Bookingseats.join(", ")}
                </p>
              </div>

              <div className="flex md:flex-col justify-between items-start md:items-end gap-2">
                <span className="text-green-600 font-semibold text-sm">
                  Confirmed
                </span>

                <button
                  onClick={() => handleCancelBooking(index)}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyBookings;

import React from "react";
import { Calendar, Clock, MapPin, Film } from "lucide-react";

const MyBookings = () => {
  const bookings = [
    {
      id: 1,
      movie: "Dhurandar",
      date: "25 Sep 2026",
      time: "7:30 PM",
      theatre: "PVR Cinemas, DB Mall",
      seats: "C5, C6",
      screen: "Screen 3",
    },
    {
      id: 2,
      movie: "Rajasaab",
      date: "28 Sep 2026",
      time: "4:00 PM",
      theatre: "Cinepolis, Aura Mall",
      seats: "A1, A2",
      screen: "Screen 1",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No active bookings.</p>
      ) : (
        <div className="space-y-5">
          {bookings.map((ticket) => (
            <div
              key={ticket.id}
              className="
                relative bg-white border rounded-xl shadow
                p-5 flex flex-col md:flex-row gap-6
                overflow-hidden
              "
            >
              {/* Left Cut Effect */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-gray-100 rounded-r-full" />
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-5 h-10 bg-gray-100 rounded-l-full" />

              {/* Movie Info */}
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-2">
                  {ticket.movie}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Film size={14} /> {ticket.screen}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-dashed bg-gray-300" />

              {/* Details */}
              <div className="flex-1 space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Calendar size={16} />
                  {ticket.date}
                </p>

                <p className="flex items-center gap-2">
                  <Clock size={16} />
                  {ticket.time}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {ticket.theatre}
                </p>

                <p>
                  <span className="font-medium">Seats:</span>{" "}
                  {ticket.seats}
                </p>
              </div>

              {/* Action */}
              <div className="flex md:flex-col justify-between items-start md:items-end">
                <span className="text-green-600 font-semibold text-sm">
                  Confirmed
                </span>

                <button
                  className="
                    mt-3 md:mt-0 px-4 py-2 text-sm
                    bg-black text-white rounded-lg
                    hover:bg-gray-800 transition
                  "
                >
                  View Ticket
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
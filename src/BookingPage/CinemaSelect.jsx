import { useState } from "react";
import { Heart, Popcorn, Ticket } from "lucide-react";

const CinemaSelect = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const theatres = [
    {
      id: 1,
      name: "DB City Mall",
      location: "MP Nagar, Bhopal",
      shows: ["10:30 AM", "1:45 PM", "4:30 PM", "7:15 PM", "10:00 PM"],
      icon: "/icon/cinepolisicon.png",
    },
    {
      id: 2,
      name: "Aura Mall",
      location: "Gulmohar, Bhopal",
      shows: ["11:00 AM", "2:15 PM", "5:00 PM", "8:30 PM"],
      icon: "/icon/cinepolisicon.png",
    },
    {
      id: 3,
      name: "Mukta A2 Cinemas",
      location: "Kolar Road, Bhopal",
      shows: ["9:45 AM", "12:30 PM", "3:15 PM", "6:00 PM", "9:30 PM"],
      icon: "/icon/a2.png",
    },
    {
      id: 4,
      name: "PVR Cinemas",
      location: "New Market, Bhopal",
      shows: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:15 PM"],
      icon: "/icon/pvricon.png",
    },
  ];

  return (
    <section className="w-full px-4 md:px-12 py-6 bg-gray-100">
      <h2 className="text-xl md:text-3xl font-semibold mb-6">
        Select Theatre & Show Time
      </h2>

      <div className="space-y-6">
        {theatres.map((theatre) => (
          <div
            key={theatre.id}
            className="border rounded-lg p-4 md:p-6 shadow-sm bg-white"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                {/* Logo */}
                <img
                  src={theatre.icon}
                  alt=""
                  className="w-12 h-12 rounded-full object-contain"
                />

                {/* Name + Icons */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {theatre.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {theatre.location}
                  </p>

                  {/* Feature Icons */}
                  <div className="flex gap-3 mt-2 text-gray-600">
                    <Popcorn size={18} title="Food & Beverages" />
                    <Ticket size={18} title="M-Ticket Available" />
                  </div>
                </div>
              </div>

              {/* Favourite */}
              <Heart
                className="cursor-pointer text-gray-400 hover:text-red-500"
                size={22}
              />
            </div>

            {/* Timings - LEFT aligned */}
            <div className="flex flex-wrap gap-3">
              {theatre.shows.map((time) => {
                const isSelected =
                  selectedShow === `${theatre.id}-${time}`;

                return (
                  <button
                    key={time}
                    onClick={() =>
                      setSelectedShow(`${theatre.id}-${time}`)
                    }
                    className={`
                      px-4 py-2 rounded-md text-sm font-medium transition
                      ${
                        isSelected
                          ? "bg-green-600 text-white"
                          : "bg-green-50 text-green-700 border border-green-400 hover:bg-green-600 hover:text-white"
                      }
                    `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CinemaSelect;

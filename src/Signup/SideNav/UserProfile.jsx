import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Sidebar from "./Sidebar";
import MyBookings from "./MyBookings";
import BookingHistory from "./BookingHistory";
import Favourites from "./Favourites";
import Help from "./Help";

const UserProfile = () => {
  const [active, setActive] = useState("bookings");
  const contentRef = useRef(null);

  // 🔹 Animate content when tab changes
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [active]);

  return (
    <div className="md:h-160 bg-gray-100 flex justify-center px-2 md:px-6 py-6">
      <div
        className="
          bg-white w-full max-w-6xl rounded-xl shadow-lg
          flex flex-col md:flex-row overflow-hidden
        "
      >
        {/* Sidebar */}
        <Sidebar setActive={setActive} />

        {/* Main Content */}
        <div
          ref={contentRef}
          className="
            md:w-3/4 w-full
            p-4 md:p-8
          "
        >
          {active === "bookings" && <MyBookings />}
          {active === "history" && <BookingHistory />}
          {active === "favourites" && <Favourites />}
          {active === "help" && <Help />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

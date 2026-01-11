import React, { use, useEffect, useState } from "react";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import UserLoginButton from "./UserLoginButton";
import UserLogoutButton from "./UserLogoutButton";

const Sidebar = ({ setActive }) => {

  let [userData, setUserData] = useState(null);

 useEffect(() => {
    // Get logged-in user from localStorage
    let user = JSON.parse(localStorage.getItem("loginUser"));
    setUserData(user);
  }, []);

  return (
    <aside className="md:w-1/4 w-full bg-gray-900 text-white flex flex-col justify-between p-6">

      {/* ---------- User Info ---------- */}
      <div>
        <div className="flex flex-col items-center border-b border-gray-700 pb-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-semibold">
            <User size={32} />
          </div>
          <h2 className="mt-3 text-lg font-semibold">{userData?.name || "username"}</h2>
          <p className="text-sm text-gray-400">{userData?.email || "user@example.com"}</p>
        </div>

        {/* ---------- Menu ---------- */}
        <ul className="mt-6 space-y-2">
          <Menu label="🎟 My Bookings" onClick={() => setActive("bookings")} />
          <Menu label="📜 Booking History" onClick={() => setActive("history")} />
          <Menu label="❤️ Favourites" onClick={() => setActive("favourites")} />
          <Menu label="❓ Help & Support" onClick={() => setActive("help")} />
        </ul>
      </div>

      {/* ---------- Bottom Buttons ---------- */}
      <div className="mt-6">
        {userData ? <UserLogoutButton setUserData={setUserData} /> : <UserLoginButton />}
      </div>

    </aside>
  );
};

const Menu = ({ label, onClick }) => (
  <li
    onClick={onClick}
    className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
  >
    {label}
  </li>
);

export default Sidebar;

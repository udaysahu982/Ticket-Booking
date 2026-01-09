import React from "react";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ setActive }) => {
  return (
    <aside className="md:w-1/4 w-full bg-gray-900 text-white flex flex-col justify-between p-6">

      {/* ---------- User Info ---------- */}
      <div>
        <div className="flex flex-col items-center border-b border-gray-700 pb-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-semibold">
            <User size={32} />
          </div>
          <h2 className="mt-3 text-lg font-semibold">User Name</h2>
          <p className="text-sm text-gray-400">user@email.com</p>
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
      <div className="pt-6 border-t border-gray-700">
        
        <Link to='/login'
          onClick={() => setActive("login")}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
        >
          <LogIn size={18} />
          Login / Signup
        </Link>
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

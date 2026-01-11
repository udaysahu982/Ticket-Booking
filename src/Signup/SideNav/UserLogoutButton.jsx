import { LogOut } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogoutButton = () => {
    let navigate =useNavigate()
  return (
   <div className="pt-6 border-t border-gray-700">
  <button
    onClick={() => {
      // Remove logged-in user from localStorage
      localStorage.removeItem("loginUser");
      // Optional: redirect to home
      navigate("/");
      // Optional: set active state if you track menu
    //   setActive("logout");
    }}
    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
  >
    <LogOut size={18} />
    Logout
  </button>
</div>

  )
}

export default UserLogoutButton

import { LogIn } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const UserLoginButton = () => {

  return (
    <div className="pt-6 border-t border-gray-700">
        
        <Link to='/login'
          onClick={() => setActive("login")}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
        >
          <LogIn size={18} />
          Login / Signup
        </Link>
      </div>
  )
}

export default UserLoginButton

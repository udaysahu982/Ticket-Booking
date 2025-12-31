import React from 'react'
import LoginBox from './LoginBox'
import Galaxy from './Galaxy';

const Login = () => {
  return (
    <div className='w-screen h-screen bg-black relative overflow-hidden'>
        <Galaxy/>
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
    
    {/* Signup box should still be clickable */}
    <div className="pointer-events-auto">
     <LoginBox/>
    </div>

  </div>
    
    </div>
    
  )
}

export default Login

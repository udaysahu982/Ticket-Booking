import React from 'react'

import SignupBox from './SignupBox'
import Galaxy from './Galaxy';

const signup = () => {
  return (
    
   <div className='w-screen h-screen bg-black relative overflow-hidden'>
  <Galaxy />
 
   <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
    
    {/* Signup box should still be clickable */}
    <div className="pointer-events-auto">
      <SignupBox />
    </div>

  </div>
</div>


        

   

  )
}

export default signup

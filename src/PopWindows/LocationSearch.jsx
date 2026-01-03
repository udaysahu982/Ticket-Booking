import React from 'react'
import CityBlock from './CityBlock'
import { LocateFixed } from 'lucide-react';

const LocationSearch = () => {
  return (
    <div className='md:w-full md:h-182 border flex justify-center items-center'>
        
        <div className='md:w-3xl md:h-150 border rounded-2xl' >

          <div className='font-bold text-gray-600 md:w-full md:h-12 flex justify-between' style={{fontSize:"16px"}}>
            <span className='md:pl-5 md:pt-2'>Select Location</span>
             <span className='md:w-7 md:h-7 flex justify-center items-center text-3xl cursor-pointer font-semibold bg-black text-red-600 rounded'>X</span>
            </div>
          <div className='md:w-full md:h-14 flex justify-center items-center'>
            <input className='border-2 md:w-185 md:h-12 rounded-xl md:p-4' style={{borderColor:"grey", fontWeight:"600"}} type="text" placeholder='Search city, area or locality' />
          </div>
          <div className='md:w-full md:h-11 flex items-center pl-2 cursor-pointer'> 
              <LocateFixed className='md:h-8 md:w-10 text-blue-500' />
              <div className='md:h-10 md:w-2xs font-bold font-sans md:pl-3 flex items-center'>Use Current Location</div>
          </div>
          <CityBlock/>
          
        </div>        
      
    </div>
  )
}

export default LocationSearch

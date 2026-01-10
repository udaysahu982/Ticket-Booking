import React, { useState } from 'react'
import DateSelect from './DateSelect'
import CinemaSelect from './CinemaSelect'
import Seat from './SeatBooking/Seat'

const BookingPageBody = () => {

  let [showSeat, setShowSeat]=useState(false)
  return (
    <div className='w-full  relative '>
      {showSeat && <Seat onClose={()=>{setShowSeat(false)}}/>}
     
       <CinemaSelect setShowSeat={setShowSeat}/>
    </div>
  )
}

export default BookingPageBody

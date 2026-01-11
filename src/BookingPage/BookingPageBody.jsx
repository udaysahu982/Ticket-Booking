import React, { useState } from 'react'
import DateSelect from './DateSelect'
import CinemaSelect from './CinemaSelect'
import Seat from './SeatBooking/Seat'

const BookingPageBody = ({bookingData,setBookingData}) => {

  let [showSeat, setShowSeat]=useState(false)

  return (
    <div className='w-full  relative '>
      {showSeat && <Seat 
      
      onClose={()=>{setShowSeat(false)}}
      bookingData={bookingData}
      setBookingData={setBookingData}
      />}
     
       <CinemaSelect 
       bookingData={bookingData}
       setBookingData={setBookingData}
       setShowSeat={setShowSeat}/>
    </div>
  )
}

export default BookingPageBody

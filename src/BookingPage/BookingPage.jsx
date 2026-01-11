import React, { useEffect, useState } from 'react'
import BookingPageHead from './BookingPageHead.jsx'
import BookingPageBody from './BookingPageBody.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookingPage = () => {
  
  const {id}=useParams()

  let [bookingData,setBookingData]=useState({
       movieId: id,          
       cinemaName: "",
       showTime: "",
       Bookingseats: [],
       Date:"",
       Day:""
  })


  return (
    <>
    
      {/* <BookingPageHead props={imgObj[id]}/> */}
      <BookingPageHead id={id}/>
      <BookingPageBody 
      bookingData={bookingData}
      setBookingData={setBookingData}
      />


    </>
  )
}

export default BookingPage

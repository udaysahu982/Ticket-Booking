import React, { useEffect } from 'react'
import BookingPageHead from './BookingPageHead.jsx'
import BookingPageBody from './BookingPageBody.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookingPage = () => {
  
  const {id}=useParams()


  return (
    <>
    
      {/* <BookingPageHead props={imgObj[id]}/> */}
      <BookingPageHead id={id}/>
      <BookingPageBody/>
    </>
  )
}

export default BookingPage

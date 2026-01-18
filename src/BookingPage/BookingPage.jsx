import React, { useEffect, useState } from 'react'
import BookingPageHead from './BookingPageHead.jsx'
import BookingPageBody from './BookingPageBody.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookingPage = () => {
  
  const {id}=useParams()

  let [data,setData]=useState(null);


  let [bookingData,setBookingData]=useState({
       movieId: id,
       userId:"",
       movieName: "",          
       cinemaName: "",
       showTime: "",
       Bookingseats: [],
       Date:"",
       Day:""
  })

 useEffect(()=>{
 
   axios.get(`http://localhost:3000/movielist/${id}`)
   .then((res)=>{
     
    //  console.log(res.data);
     setData(res.data);

     setBookingData((prev) => ({
          ...prev,
          movieName: res.data.movieName
        }))

   })
   .catch((err)=>console.log(err));
  
  },[id])

  return (
    <>
    
      {/* <BookingPageHead props={imgObj[id]}/> */}
      <BookingPageHead data={data}/>


      <BookingPageBody 
      bookingData={bookingData}
      setBookingData={setBookingData}
      />


    </>
  )
}

export default BookingPage

import React, { useState } from 'react'
import SearchModal from '../SearchBox/SearchModal'

const Search = ({showSearchBox, setShowSearchBox}) => {
  
 
  return (
    <>
     <div onClick={() => setShowSearchBox(true)}  className='flex w-full border h-11 ' style={{borderRadius:"10px"}}>
        <img style={{width:"10%", height:"100%", }} src="/searchicon.svg" alt=""  />
        {/* <input type="none" placeholder='' name="search" id=""  /> */}
       <div className=' text-xl flex items-center pl-4' style={{width:"90%", height:"100%", fontFamily:"sans-serif", borderRadius:"10px"}}>Search for a movie</div>
        </div>
       
    </>
  )
}

export default Search

import React from 'react'

const Search = () => {
  return (
    <>
     <div className='flex w-full border h-11 ' style={{borderRadius:"10px"}}>
        <img style={{width:"10%", height:"100%", }} src="/searchicon.svg" alt=""  />
        <input type="text" placeholder='Search for a movie' name="search" id="" style={{width:"90%", height:"100%", border:"none", fontSize:"1rem", fontFamily:"sans-serif", borderRadius:"10px"}} />
        </div>
    </>
  )
}

export default Search

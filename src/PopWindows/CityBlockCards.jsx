import React from 'react'

const CityBlockCards = ({data}) => {
  return (
    <div className='md:max-w-30 md:min-w-30 md:h-25 flex flex-col items-center rounded-2xl' style={{background:"AliceBlue"}}>
            <img src={data.cityimg} className='md:w-fit md:h-18' alt="" />
            <div className='font-semibold'>{data.city}</div>
        </div>
  )
}

export default CityBlockCards

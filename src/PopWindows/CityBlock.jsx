import React from 'react'
import CityBlockCards from './CityBlockCards'

const CityBlock = () => {

    let Prayagraj={
        city:"Prayagraj",
        cityimg:"landmark/AhmdebadLandmark.png"
    }
    
    let Chandigarh={
        city:"Chandigarh",
        cityimg:"landmark/chandigarh.png"
    }
    let Chennai={
        city:"Chennai",
        cityimg:"landmark/chennai.png"
    }
    let Delhi={
        city:"Delhi",
        cityimg:"landmark/Delhincr.png"   
    }
    let Mumbai={
        city:"Mumbai",
        cityimg:"landmark/gateofindia.png"   
    }
    let Pune={
        city:"Pune",
        cityimg:"landmark/gateofindia.png"   
    }
     let Kolkata={
        city:"Kolkata",
        cityimg:"landmark/pune.png"   
    }
  return (
    <div className='w-full border h-70 '>
      <div className='md:min-w-3xl md:h-10 font-semibold text-xl flex items-center pl-3'>Popular Cities</div>
      <div className='md:max-w-3xl md:min-w-3xl md:h-60 p-3 grid grid-cols-2 md:grid-cols-5 gap-4' >
        <CityBlockCards data={Chandigarh}/>
        <CityBlockCards data={Chennai}/>
        <CityBlockCards data={Delhi}/>
        <CityBlockCards data={Mumbai}/>
        <CityBlockCards data={Pune}/>
        <CityBlockCards data={Prayagraj}/>
        <CityBlockCards data={Kolkata}/>
       
      </div>
    </div>
  )
}

export default CityBlock

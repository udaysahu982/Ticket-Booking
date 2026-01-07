import React from 'react'
import EventCard from './EventCard'




const ExploreEvents = () => {

  let music ="/music/Music.avif"
  let nightlife="/music/nightlife.avif"
  let comedy="/music/comedy.avif"
  let sport="/music/sport.avif"

  return (
    <div className='w-full h-100'>
      <div className='h-16 text-3xl font-semibold border flex items-center pl-12'>Explore Events</div>
      <div className='p-12 border flex gap-5'>
       <EventCard cardimg={music}/>
       <EventCard cardimg={nightlife}/>
       <EventCard cardimg={comedy}/>
       <EventCard cardimg={sport}/>
       <EventCard cardimg={music}/>
       <EventCard cardimg={music}/>
        </div>
    </div>
  )
}

export default ExploreEvents

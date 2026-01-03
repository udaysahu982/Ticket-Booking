import React from 'react'
import EventCard from './EventCard'
import music from '../assets/music/music.avif'
import nightlife from '../assets/music/nightlife.avif'
import comedy from '../assets/music/comedy.avif'
import sport from '../assets/music/sport.avif'

const ExploreEvents = () => {


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

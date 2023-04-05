import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../EventCard/EventCard'
import "./EventList.css"

const EventList = () => {
    const [events, setEvents] = useState()

    const getEvents = () => {
        axios
          .get("http://localhost:8080/event-list"
          )
          .then((response) => setEvents(response.data))
          //.then((response) => console.log(response.data.events))
          .catch((err) => console.error(err));
      };
  
useEffect(() => {
    getEvents();
}, []);

    return (
        <div className='eventAll'>  
        <h3 className='h3-text'>See all events happening in Lisbon.</h3>
        <h4 className="h4-text">Not all events are exclusively about food, some of them you can grab a drink too!</h4>
          <div className='eventContainer'>
    
            { events ? events.map((event) => (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            )) : null}
          </div>
        </div>
  )
}

export default EventList
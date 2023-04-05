import React from 'react'
import "./EventCard.css"

const EventCard = ({event}) => {
    const date = new Date(event.time_start);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return (
    <div key={event.id} className='eventCard'>
      
      <img src={event.image_url} alt={event.name} className="imageEvent"/>
      <h4>Name: <p>{event.name}</p></h4>
      <h4>Location: <p>{event.location.address1}</p></h4>
      <h4>Description: <p>{event.description}</p></h4>
      <h4>Date: <p>{formattedDate} {formattedTime}</p></h4>
      <p>
        {event.is_free
          ? 'This event is '
          : 'This event is not '}
        {event.is_free && <strong>free!</strong>}
        {!event.is_free && <strong>not free.</strong>}
      </p>
      <p>For more information <a href={event.event_site_url}>Click here</a></p>
      <br></br>
    </div>
  )
}

export default EventCard
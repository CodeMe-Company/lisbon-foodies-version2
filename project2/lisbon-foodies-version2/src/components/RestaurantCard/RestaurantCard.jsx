import React from 'react'
import "./RestaurantCard.css"
import { Link } from "react-router-dom";


const RestaurantCard = ({restaurant}) => {

  return (
    <Link to={`/restaurant/${restaurant.id}`} className='restCardLink'>
      <div key={restaurant.id} className='restCard'>
        <img src={restaurant.image_url} alt={restaurant.name} className='image' />
        <div className='info'>
          <p className='name'>{restaurant.name}</p>
          <br></br>
          <p className='rating'>Rating: {restaurant.rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard
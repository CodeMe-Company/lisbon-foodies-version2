import React from 'react'
import "./RestaurantCard.css";


const RestaurantCard = ({restaurant}) => {

  return (
    
    <div key={restaurant.id}>
      <p>Name: {restaurant.name}</p>
      <p>Location: {restaurant.location.address1}</p>
      <p>Phone: {restaurant.phone}</p>
      <p>Rating: {restaurant.rating}</p>
      <img src={restaurant.image_url} alt={restaurant.name} className="image"/>
      </div>
  )
}

export default RestaurantCard
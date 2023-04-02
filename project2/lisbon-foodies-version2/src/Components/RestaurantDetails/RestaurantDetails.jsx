import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './RestaurantDetails.css'

const RestaurantDetails = () => {

  const [restaurant, setRestaurant] = useState()
  const {id} = useParams()
  console.log(id)

     const getRestaurant = () => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
        },
      };
  
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
          options
        )
        .then((response) => setRestaurant(response.data))
        .catch((err) => console.error(err));
    };

     useEffect(() => {
        getRestaurant()
    }, [])
  
  return (
    <div>
        {restaurant ? (
        <div className="restaurant-card">
          <h1>{restaurant.name}</h1>
          <img className="img-restaurant" src={restaurant.image_url} alt={restaurant.name} />
          <h2>Rating: {restaurant.rating}</h2>
          <h2>Location: {restaurant.location.address1}</h2>
          <h2>Phone: {restaurant.phone}</h2> 
          <h2>Price: {restaurant.price}</h2>
          <h2>Distance: {restaurant.distance}</h2>
          </div>
        ) : null}
    </div>
  )
}

export default RestaurantDetails
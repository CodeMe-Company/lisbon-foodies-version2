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
  
  const [review, setReview] = useState()
  
  const getReview = () => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
        },
      };
  
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews?limit=10&sort_by=yelp_sort`,
          options
        )
        .then((response) => setReview(response.data)) // I think it is this part that gives errors, but don't ask me why
        // .then((response) => console.log(response.data))
        .catch((err) => console.error(err));
    };

     useEffect(() => {
        getReview()
    }, [])
            
  return (
    <div className='main-container'>
        {restaurant ? (
        <div className="restaurant-card">
          <h1 className='h1-text'>{restaurant.name}</h1>
          <hr className='line'/>
          <div className='images-div'>
          <img className="img-restaurant" src={restaurant.photos[0]} alt={restaurant.name} />
          <img className="img-restaurant" src={restaurant.photos[1]} alt={restaurant.name} />
          <img className="img-restaurant" src={restaurant.photos[2]} alt={restaurant.name} />
          </div>
          <hr className='line'/>
          <div className='bottom-page'>
          <div>
          <h2>Rating: {restaurant.rating}</h2>
          <h2>Location: {restaurant.location.address1}</h2>
          <h2>Phone: {restaurant.phone}</h2> 
          <h2>Price: {restaurant.price}</h2>
            </div>
          <hr className='line-bottom'/>
          <div className='reviews'>
              <h2 className='reviews-title'>Reviews</h2>
              <h3>1: {review.reviews}</h3>
            </div>
            </div>
          </div>
        ) : null}
    </div>
  )
}

export default RestaurantDetails
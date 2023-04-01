import React, {useEffect} from 'react'
import axios from 'axios'

const RestaurantDetails = () => {

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
          "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/business_id_or_alias",
          options
        )
        // .then((response) => setRestaurants(response.data.businesses))
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    };

     useEffect(() => {
        getRestaurant()
    }, [])
  
  return (
    <div>RestaurantDetails</div>
  )
}

export default RestaurantDetails
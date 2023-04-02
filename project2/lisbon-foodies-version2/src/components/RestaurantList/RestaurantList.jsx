import axios from "axios";
import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState();
    const [restaurantSearch, setRestaurantSearch] = useState();
    const [search, setSearch] = useState("");
  
    const getBusinesses = () => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
        },
      };
  
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=lisbon&term=restaurants&categories=vegetarian&sort_by=best_match&limit=50",
          options
        )
        // .then((response) => setRestaurants(response.data.businesses))
        .then((response) => console.log(response.data.businesses))
        .catch((err) => console.error(err));
    };
  
    // Search function
    const searchRestaurant = () => {
      const res =
        restaurants &&
        restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase())
        );
      setRestaurantSearch(res);
    };
  
    const handleChange = (event) => {
      setSearch(event.target.value);
    };
  
    useEffect(() => {
      getBusinesses();
    }, []);
  
    useEffect(() => {
      searchRestaurant();
    }, [search]);
  
    return (
      <>
        <div>
          <SearchBar
            search={search}
            handleChange={handleChange}
            restaurantSearch={restaurantSearch}
          />
          {restaurants && search === ""
            ? restaurants.map((restaurant) => (
              <Link to={`/restaurants/${restaurant.id}`}>
                <div key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
                </Link>
              ))
            : null}
          {restaurantSearch && search !== ""
            ? restaurantSearch.map((restaurant) => (
              <Link to={`/restaurants/${restaurant.id}`}>
                <div key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
                </Link>
              ))
            : null}
        </div>
      </>
    );
  }

export default RestaurantList


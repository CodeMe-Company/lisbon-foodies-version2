import axios from "axios";
import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState();
  const [restaurantSearch, setRestaurantSearch] = useState();
  const [search, setSearch] = useState("");

  const getBusinesses = () => {
    axios
      .get("http://localhost:8080/restaurant-list"
      )
      .then((response) => setRestaurants(response.data.businesses))
      // .then((response) => console.log(response.data.businesses))
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
              <Link  key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
                  <RestaurantCard restaurant={restaurant} />
              </Link>
            ))
          : null}
        {restaurantSearch && search !== "" && search.length > 0
          ? restaurantSearch.map((restaurant) => (
            <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`} >
                  <RestaurantCard restaurant={restaurant} />
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

export default RestaurantList;

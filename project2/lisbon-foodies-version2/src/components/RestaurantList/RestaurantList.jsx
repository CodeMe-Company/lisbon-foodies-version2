import axios from "axios";
import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SearchBar from "../SearchBar/SearchBar";
import "./RestaurantList.css"

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
        <div className="searchBarAll">
        <SearchBar
          search={search}
          handleChange={handleChange}
          restaurantSearch={restaurantSearch}
        />
        </div>
        <br></br>
        <h3 className="pageText">Here you can see all the vegetarians restaurants available!</h3>
        <br></br>
        <div className="restaurantList">
        {restaurants
          ? restaurants.map((restaurant) => (
                  <RestaurantCard restaurant={restaurant} />
            ))
          : null}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
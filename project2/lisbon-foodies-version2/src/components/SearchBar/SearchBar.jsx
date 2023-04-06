import React from "react";
import "./SearchBar.css";
import {Link} from "react-router-dom"

const SearchBar = ({ search, handleChange, restaurantSearch }) => {
  return (
    <div className="search-area">
      {/* <h1>Search bar</h1> */}
      {/* <label htmlFor="search">Search: </label> */}
      <div className="search-bar">
        <input
          type="search"
          name="search"
          placeholder="Search restaurant"
          value={search}
          onChange={handleChange}
        />
      </div>
      <ul className="test">
        {restaurantSearch && search !== ""
          ? restaurantSearch.filter((restaurant, index) => index < 3).map((restaurant) => (
            <Link
            to={`/restaurant/${restaurant.id}`}
            key={restaurant.id}
          >
            <div className="searchCard">
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                className="imageSearch"
              />
              <li className="testName">{restaurant.name}</li>
            </div>
          </Link>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SearchBar;

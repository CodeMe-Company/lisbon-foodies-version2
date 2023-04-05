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
      <ul>
        {restaurantSearch && search !== ""
          ? restaurantSearch.map((restaurant) => (
              <div key={restaurant.id}>
              <Link to={`/restaurant/${restaurant.id}`}>
                <img src={restaurant.image_url} alt={restaurant.name} className="imageSearch"/>
                <li>{restaurant.name}</li>
              </Link>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SearchBar;

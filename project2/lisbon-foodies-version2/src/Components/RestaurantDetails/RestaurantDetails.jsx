import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();

  const getRestaurant = () => {
    axios
      .get(`http://localhost:8080/restaurant-details/${id}`)
      .then((response) => setRestaurant(response.data))
      // .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  const [reviews, setReviews] = useState();

  const getReview = () => {
    axios
      .get(`http://localhost:8080/restaurant-reviews/${id}`)
      .then((response) => setReviews(response.data))
      // .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="main-container">
      {restaurant ? (
        <div className="restaurant-card">
          <h1 className="h1-text">{restaurant.name}</h1>
          <hr className="line" />
          <div className="images-div">
            {restaurant.photos
              .filter((photo, index) => index < 3)
              .map((photo, index) => (
                <img
                  key={index}
                  className="img-restaurant"
                  src={photo}
                  alt={restaurant.name}
                />
              ))}
          </div>
          <hr className="line" />
          <div className="bottom-page">
            <div>
              <h2>Rating: {restaurant.rating}</h2>
              <h2>Location: {restaurant.location.address1}</h2>
              <h2>Phone: {restaurant.phone}</h2>
              <h2>Price: {restaurant.price}</h2>
            </div>
            <hr className="line-bottom" />
            <div className="reviews">
              <h2 className="reviews-title">Reviews</h2>
              <ol>
                {reviews
                  ? reviews.map((review) => (
                      <li key={review.id}>
                        <p>{review.user.name}</p>
                        <p>{review.text}</p>
                        <p>{review.rating}</p>
                      </li>
                    ))
                  : null}
              </ol>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantDetails;

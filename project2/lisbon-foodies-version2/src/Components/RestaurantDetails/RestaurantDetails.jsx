import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";
import Star from './iconStar.png'
import AddReview from "../AddReview/AddReview";

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

   const handleSubmit = (event, addReview) => {
     event.preventDefault();
    //   console.log("id:", uuidv4());
    // const newReview = { id: uuidv4(), ...addReview };
    // console.log("list", newReview);
    // setReviews([newReview, ...reviews]);
     setReviews([addReview, ...reviews]);
   }
  
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
              <h2 className="h2-text">Rating: {restaurant.rating}</h2>
              <h2 className="h2-text">Location: {restaurant.location.address1}</h2>
              <h2 className="h2-text">Phone: {restaurant.phone}</h2>
              <h2 className="h2-text">Price: {restaurant.price}</h2>
            </div>
            <hr className="line-bottom" />
            <div className="reviews">
              <h2 className="reviews-title">Reviews</h2>
              <ul className="ul-reviews">
                {reviews
                  ? reviews.map((review) => (
                    <li className="li-reviews" key={review.id}>
                      <p className="p-text">{review.text}</p>
                      <p className="p-name">{review.user.name}</p>
                      <p className="p-rating">Rating: {review.rating}  <img className="star-icon" src={Star} alt="star" /></p>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <AddReview handleSubmit={handleSubmit} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantDetails;

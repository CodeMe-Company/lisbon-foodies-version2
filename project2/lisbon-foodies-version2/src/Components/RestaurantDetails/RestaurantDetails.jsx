import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css";
import Star from './iconStar.png'
import AddReview from "../AddReview/AddReview";
import { UserInfoContext } from "../context/UserInfoContext";

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();
  const { userLogin } = useContext(UserInfoContext)


  const getRestaurant = () => {
    axios
      .get(`http://localhost:8080/restaurant-details/${id}`)
      .then((response) => setRestaurant(response.data))
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
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getReview();
  }, []);

  // const [addReview, setAddReview] = useState({});
  const [newReviews, setNewReviews] = useState(true);

   const handleSubmit = (event, addReview) => {
     event.preventDefault();
     if(userLogin.username){
      addReview["name"] = userLogin.username;
     }
    //   console.log("id:", uuidv4());
    // const newReview = { id: uuidv4(), ...addReview };
    // console.log("list", newReview);
    // setReviews([newReview, ...reviews]);
    // setNewReviews([addReview, ...newReviews]);
    setNewReviews(false)
    setReviews([...reviews, addReview]);
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
              <h2 className="h2-text"><span className="bolded">Rating:</span> {restaurant.rating}</h2>
              <h2 className="h2-text"><span className="bolded">Location:</span> {restaurant.location.address1}</h2>
              <h2 className="h2-text"><span className="bolded">Phone:</span> {restaurant.phone}</h2>
              <h2 className="h2-text"><span className="bolded">Price:</span> {restaurant.price}</h2>
            </div>
            <hr className="line-bottom" />
            <div className="reviews">
              <h2 className="reviews-title">Reviews</h2>
              <ul className="ul-reviews">
                {reviews 
                  ? reviews.map((review, index) => (
                    <li className="li-reviews" key={review?.id ? review.id : index }>
                      <p className="p-text">{review.text}</p>
                      <p className="p-name">{review?.user?.name ? review.user.name : review.name }</p>
                      <p className="p-rating">Rating: {review.rating}  <img className="star-icon" src={Star} alt="star" /></p>
                      </li>
                    ))
                  : null}
                {/* {newReviews
                  ? newReviews.map((review, index) => (
                    <li className="li-reviews" key={index}>
                      <p className="p-text">{review.message}</p>
                      <p className="p-name">{review.name}</p>
                      <p className="p-rating">Rating: {review.rating}  <img className="star-icon" src={Star} alt="star" /></p>
                      </li>
                    ))
                  : null} */}
              </ul>
            </div>
           {newReviews ? <AddReview handleSubmit={handleSubmit} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantDetails;

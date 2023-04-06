import React, { useState, useContext } from "react";
import RatingForm from "../RatingStars/RatingStarsForm";
import { UserInfoContext } from "../context/UserInfoContext";

const AddReview = ({handleSubmit}) => {

  const { userLogin } = useContext(UserInfoContext)

    const [addReview, setAddReview] = useState({});
    const handleChange = (event) => {
        // console.log("Name: ", event.target.name)
        // console.log("value:", event.target.value)
        setAddReview({ ...addReview, [event.target.name]: event.target.value })
    };

    const handleStars = (number) => {
      setAddReview({ ...addReview, "rating": number })
  };



  return (
      <div>
          <h3 className='h2-addReview'>To add a review, please fill in the form below</h3>
          <form onSubmit={(event) => handleSubmit(event, addReview)}>
              <label htmlFor="name-label">Your Name: </label> <br />
              {userLogin.username ? <input type="text" value={userLogin.username} name="name" /> : <input type="text" name="name" onChange={handleChange} /> }<br />
              <label htmlFor="rating">Rating: </label> <br />
              <RatingForm stars={0} handleStars={handleStars}  />
              <br />
              {/* <input type="number" name="rating" onChange={handleChange}   /><br /> */}
              <label htmlFor="text">Write Your Review</label><br />
              <textarea name="text" type="text" id="review-message" onChange={handleChange} ></textarea><br />
              <br />
            <button className="add-review-button" type="submit"> Add Review </button>
          </form>
    </div>
  )
}

export default AddReview
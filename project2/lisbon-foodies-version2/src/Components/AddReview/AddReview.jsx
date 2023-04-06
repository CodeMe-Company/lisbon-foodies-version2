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
      <h3 className='h2-addReview'>To add a review, please fill in the form below</h3> <br />
      <div className="review-form">
        <form onSubmit={(event) => handleSubmit(event, addReview)}>
          <br />
              <label id="label-name" htmlFor="name-label">Your Name: </label> <br />  <br />
              {userLogin.username ? <input id="input-review" type="text" placeholder="Type your name" value={userLogin.username} name="name" /> : <input id="input-review" placeholder="Type your name" type="text" name="name" onChange={handleChange} /> }<br />
              <br /><label  id="label-review" htmlFor="rating">Rating: </label> <br />
              <div className="review"><RatingForm stars={0} handleStars={handleStars} /></div>
              <br />
              {/* <input type="number" name="rating" onChange={handleChange}   /><br /> */}
              <label id="label-review" htmlFor="text">Write Your Review:</label><br /> <br />
              <textarea id="input-review"  placeholder="Leave a review" name="text" type="text" onChange={handleChange} ></textarea><br />
              <br />
            <button className="add-review-button" type="submit"> Add Review </button>
        </form>
        </div>
    </div>
  )
}

export default AddReview
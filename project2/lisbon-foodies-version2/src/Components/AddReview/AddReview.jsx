import React, { useState } from "react";

const AddReview = ({handleSubmit}) => {

    const [addReview, setAddReview] = useState({});
    const handleChange = (event) => {
        // console.log("Name: ", event.target.name)
        // console.log("value:", event.target.value)
        setAddReview({ ...addReview, [event.target.name]: event.target.value })
    };


  return (
      <div>
          <h3 className='h2-addReview'>To add a review, please fill in the form below</h3>
          <form onSubmit={(event) => handleSubmit(event, addReview)}>
              <label htmlFor="name-label">Your Name: </label> <br />
              <input type="text" name="name" onChange={handleChange} /><br />
              <label htmlFor="email-label">Rating: </label> <br />
              <input type="text" name="email" onChange={handleChange}   /><br />
              <label htmlFor="message">Write Your Review</label><br />
              <textarea name="review-message" id="review-message" onChange={handleChange} ></textarea><br />
              <br />
            <button className="add-review-button" type="submit"> Add Review </button>
          </form>
    </div>
  )
}

export default AddReview
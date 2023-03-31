import React from 'react'
import './HomePage.css'
import dishPhoto from './mainPhoto.jpg'

const HomePage = () => {
  return (
    <div>
          <h1 className="title">Lisbon Foodies</h1>
          <img className="img-dish" src={dishPhoto} alt="dish-photo" />
          <h2 className="textMain">Find a place in Lisbon for your next green meal</h2>
          <p className="seeParagraph">See All  Restaurants</p>
    </div>
  )
}

export default HomePage
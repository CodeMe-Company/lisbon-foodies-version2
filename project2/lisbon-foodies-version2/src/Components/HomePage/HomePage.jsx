import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import dishPhoto from './mainPhoto.jpg'

const HomePage = () => {
  return (
    <div>
          <h1 className="title">Lisbon Foodies</h1>
          <img className="img-dish" src={dishPhoto} alt="dish" />
          <h2 className="textMain">Find a place in Lisbon for your next green meal</h2>
          <Link to="/restaurant-list"><p className="seeParagraph">See All Restaurants</p></Link>
    </div>
  )
}

export default HomePage
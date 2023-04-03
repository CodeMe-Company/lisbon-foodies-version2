import React, {useState} from "react";
import Logo from "./Lisbon Foodies.jpg";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  const [active, setActive] = useState(false);


  const handleHamburger = () => {
      setActive(!active)
  };

  const body = document.querySelector('body');
  active ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";
  return (
    <div className="navbar-container">
      <Link to="/">
      <div className='logo'>
        <img
          src={Logo}
          alt="logo"
          // style={{ width: "100px", height: "100px" }}
        />
        </div>
        </Link>
      <button className={ active ? "burger-is-active , hamburger" : "hamburger"} onClick={handleHamburger}>
                <div className="bar"></div>
            </button>
            <nav className={ active ? "side-is-active , mobileNav" : "mobileNav"} >
                <Link to="/" onClick={handleHamburger}>Home Page</Link>
                <Link to="/restaurant-list" onClick={handleHamburger}>All Restaurants</Link>
                <Link to="/register" onClick={handleHamburger}>Register</Link>
                <Link to="/about-us" onClick={handleHamburger}>About Us</Link>
            </nav>
    </div>
  );
};

export default NavBar;

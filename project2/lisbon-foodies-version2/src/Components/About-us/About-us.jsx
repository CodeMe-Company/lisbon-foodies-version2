import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Lisbon Foodies</h1>
      <p>
      Lisbon - Europe’s hidden gem, has been discovered by tourists and digital nomads from all over the world.<br />
      <br />
      With the changing trends and more eco friendly approach to food, the number of vegetarian and vegans grows.<br />
      <br />
      However, here in Lisbon is still hard to find green options - especially all in one place! And that is why we decided to bring LISBON FOODIES to life!
      </p>
      <h2>Our Team (Don’t be shy say hello :) )</h2>
      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <h3>Malgorzata Zakrzewska</h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <h3>Filipe Carneiro</h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <h3>Sjoerd Blijleve</h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <h3>Joselio Barata</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
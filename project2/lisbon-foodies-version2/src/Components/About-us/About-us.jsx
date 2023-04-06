import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="about-us-container">
      <h1>Lisbon Foodies</h1>
      <p>
        Lisbon - Europe’s hidden gem, has been discovered by tourists and digital nomads from all over the world.<br />
        <br />
        With the changing trends and more eco-friendly approach to food, the number of vegetarians and vegans grows.<br />
        <br />
        However, here in Lisbon it is still hard to find green options - especially all in one place! And that is why we decided to bring LISBON FOODIES to life!
      </p>
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <h3 onClick={() => openLink('https://github.com/mzakrzewska1')}>Malgorzata Zakrzewska <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GitHub Logo" />
            </h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <h3 onClick={() => openLink('https://github.com/Filipe-Carneiro')}>Filipe Carneiro <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GitHub Logo" /></h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <h3 onClick={() => openLink('https://github.com/happylifenl')}>Sjoerd Blijleve <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GitHub Logo" /></h3>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">

            <h3 onClick={() => openLink('https://github.com/Joselio-Blip')}>Joselio Barata <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="GitHub Logo" /></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

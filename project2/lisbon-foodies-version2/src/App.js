import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const getBusinesses = () => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer LhgMafKGB-TTN1QsQ9rvNM7BMio765gCO_4fVoP71OIL8STkFNb1C_pNdwpRBQhtmLRXJ3C3JRd9Kz0AR3ehQjhNo-x0p2zXMrfTsjJA_qLjr0UycN9ShC2imogdZHYx",
      },
    };

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=lisbon&term=restaurants&categories=vegetarian&sort_by=best_match&limit=50",
        options
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <button onClick={getBusinesses}>Click me </button>
    </div>
  );
}

export default App;

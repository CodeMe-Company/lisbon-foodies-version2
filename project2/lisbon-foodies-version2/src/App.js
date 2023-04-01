import "./App.css";
import {Routes, Route} from "react-router-dom"
// import RestaurantList from "./Components/RestaurantList/RestaurantList";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import RestaurantList from "./Components/RestaurantList/RestaurantList";
import Footer from "./Components/Footer/Footer";
import RestaurantDetails from "./Components/RestaurantDetails/RestaurantDetails";
import RestaurantCard from "./Components/RestaurantCard/RestaurantCard";

function App() {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes> 
      <Footer />
      
  
    </div>
  );
}

export default App;

import "./App.css";
import {Routes, Route} from "react-router-dom"
import AboutUs from './components/About-us/About-us';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import RestaurantList from "./components/RestaurantList/RestaurantList";
import Footer from "./components/Footer/Footer";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import EventList from "./components/EventList/EventList";

function App() {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes> 
      
      <Footer />
  
    </div>
  );
}

export default App;

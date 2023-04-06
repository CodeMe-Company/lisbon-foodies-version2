import "./App.css";
import {Routes, Route} from "react-router-dom"
import AboutUs from './Components/About-us/About-us.jsx';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import RestaurantList from "./Components/RestaurantList/RestaurantList";
import Footer from "./Components/Footer/Footer";
import RestaurantDetails from "./Components/RestaurantDetails/RestaurantDetails";
import EventList from "./Components/EventList/EventList";
import UserLogin from "./Components/UserLogin/UserLogin/UserLogin";

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
        <Route path="/login" element={< UserLogin/>} />
      </Routes> 
      
      <Footer />
  
    </div>
  );
}

export default App;

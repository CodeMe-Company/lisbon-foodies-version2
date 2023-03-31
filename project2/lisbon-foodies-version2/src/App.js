import "./App.css";
import {Routes, Route} from "react-router-dom"
// import RestaurantList from "./Components/RestaurantList/RestaurantList";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import RestaurantList from "./Components/RestaurantList/RestaurantList";

function App() {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
      </Routes> 
      
  
    </div>
  );
}

export default App;

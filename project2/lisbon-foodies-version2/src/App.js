import "./App.css";
import {Routes, Route} from "react-router-dom"
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';

function App() {

  return (

    <div className="App">
      <NavBar />
      <HomePage />
    <Routes>
      <Route path="/restaurant-list" element={<RestaurantList />} />
    </Routes>
    </div>
  );
}

export default App;

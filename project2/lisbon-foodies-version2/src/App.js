import "./App.css";
import {Routes, Route} from "react-router-dom"
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";

function App() {
  
  return (


    <Routes>
      <Route path="/restaurant-list" element={<RestaurantList />} />
    </Routes>


  );
}

export default App;

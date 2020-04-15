import React from "react";

import SearchBar from "./SearchBar";
import CityResults from "./CityResults";
import RestaurantResults from "./RestaurantResults";

//searchbar component renders the searchbar allowing the user to search for the city
//cityresults outputs the cities based on the search
//restaurantresults renders the restaurant results based on the selected city in the cityresults component

const App = () => {
  return (
    <div className="app">
      <div className="app__sidebar">
        <SearchBar />
        <CityResults />
      </div>
      <RestaurantResults />
    </div>
  );
};

export default App;

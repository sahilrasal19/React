import RestaurantCards from "./RestaurantCards";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); // State to store the list of restaurants and hooks can be used only in body (function) component
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]); // State to store the filtered list of restaurants
  const [SearchText, setSearchText] = useState(""); // State to store the search text

  useEffect(() => {
    // This is a hook that runs when the component mounts/renders and runs only one initially bcoz of empty array
    // or everytime component has finished rendering useEffect is called but if no empty array then it runs after every render
    // so we use empty array to run only once

    fetchData(); // Call the function to fetch data from API
  }, []);

  const fetchData = async () => {
    // Function to fetch data from API
    const data = await fetch(API_URL); // Fetching data from API

    const datajson = await data.json(); // Converting the data to JSON format
    // Optional Chaining
    setlistOfRestaurants(
      datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    ); // Assigning the data to the state
    setFilteredRestaurants(
      datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    ); // Assigning the data to the state
  };

  const FilteredData = () => {
    // Function to filter the data based on search text
    const filtered = listOfRestaurants.filter((item) => {
      return item.info && item.info.avgRating > 4.5;
    });
    setFilteredRestaurants(filtered);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="searchAndFilter">
        <div className="search">
          <input
            type="text"
            className="textfield"
            value={SearchText}
            onChange={(e) => {
              // Function to handle the change of search text
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterSearch = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(SearchText.toLowerCase());
              });
              setFilteredRestaurants(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              FilteredData();
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="resto_container">
        {FilteredRestaurants.map((restaurants) => {
          // map through the filtered restaurants
          return (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {" "}
              <RestaurantCards restData={restaurants} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCards, { withPromotedLabel } from "./RestaurantCards";
import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const datajson = await data.json();
    setlistOfRestaurants(
      datajson?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
    setFilteredRestaurants(
      datajson?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
  };

  const FilteredData = () => {
    const filtered = listOfRestaurants.filter((item) => {
      return item.info && item.info.avgRating > 4.5;
    });
    setFilteredRestaurants(filtered);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search flex items-center ">
          <input
            type="text"
            className="m-4 px-4 border-1 border-solid  rounded-md shadow-md hover:border-2 transition-transform transform hover:scale-105"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 p-2 m-2 py-1 ml-1 rounded-xl shadow-lg hover:bg-green-200 cursor-pointer hover:shadow-xl transition-transform transform hover:scale-105"
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
        <div className="filter flex items-center">
          <button
            className="p-2 m-3 py-1 bg-green-100 cursor-pointer rounded-xl shadow-lg  hover:bg-green-200 hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => {
              FilteredData();
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="resto_container flex flex-wrap ">
        {FilteredRestaurants.map((restaurants) => {
          // map through the filtered restaurants
          return (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {" "}
              {restaurants.info.promoted ? (
                <RestaurantCardPromoted restData={restaurants} />
              ) : (
                <RestaurantCards restData={restaurants} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

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

    const restaurants =
      datajson?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants || [];

    setlistOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const FilteredData = () => {
    const filtered = listOfRestaurants.filter(
      (item) => item.info && item.info.avgRating > 4.5
    );
    setFilteredRestaurants(filtered);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="p-4 md:p-8">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search restaurants..."
            className="flex-1 md:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            onClick={() => {
              const filterSearch = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaurants(filterSearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-md shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
          onClick={FilteredData}
        >
          Top Restaurants ⭐
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="resto_container flex flex-wrap ">
        {FilteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted restData={restaurant} />
            ) : (
              <RestaurantCards restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;

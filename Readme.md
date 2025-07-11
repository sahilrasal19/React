# React

<!--
Structure or Flow of the Program:
Header
    -Logo
    -Nav Items
Body
    -Search
    -Restaurant Container
        -Restaurant Cards
        -Img
        -Name of rest, Cuisine, Ratings, Delivery Time
Footer
    -Copyright
    -Links
    -Address
    -Contact
-->

<!--
Two types of export and import

default Export/Import

export default Component;
import Component from Path;

Named Export/Import is used for multiple imports and exports

export const Component;
import { Component } from Path;
-->

<!--
React hooks
Types
useState() -- superpowerful react variables
useEffect() --
-->

<!--
// this postcssrc is a way to make sure our project understands postcss and config is to tell parcel that pls understand our tailwind framework
-->

<!--
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); // State to store the list of restaurants and hooks can be used only in body (function) component
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]); // State to store the filtered list of restaurants
  const [SearchText, setSearchText] = useState(""); // State to store the search text

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);
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
      datajson?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    ); // Assigning the data to the state
    setFilteredRestaurants(
      datajson?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
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
      <div className="filter flex">
        <div className="search flex items-center ">
          <input
            type="text"
            className="m-4 px-4 border-1 border-solid  rounded-md shadow-md hover:border-2 transition-transform transform hover:scale-105"
            value={SearchText}
            onChange={(e) => {
              // Function to handle the change of search text
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

-->

import RestaurantCards from "./RestaurantCards";
import rest_details from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

        
        const [listOfRestaurants, setlistOfRestaurants] = useState([]); // State to store the list of restaurants and hooks can be used only in body (function) component
        const [FilteredRestaurants, setFilteredRestaurants] = useState([]); // State to store the filtered list of restaurants
        const [SearchText, setSearchText] = useState(""); // State to store the search text

useEffect( () => { // This is a hook that runs when the component mounts/renders and runs only one initially bcoz of empty array 
                   // or everytime component has finished rendering useEffect is called but if no empty array then it runs after every render
                   // so we use empty array to run only once
                   
        fetchData();     // Call the function to fetch data from API
                    }, []);

const fetchData = async () => { // Function to fetch data from API
         const data = await fetch( // Fetching data from API
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.07480&lng=72.88560&str=spring%20fields&trackingId=f19a4c6a-bfc7-1b2c-dcee-06d3e88a95cb&submitAction=ENTER&queryUniqueId=ca85baaa-56ed-b6bb-a09e-70fcb6373c19"
        );
         
        const datajson = await data.json(); // Converting the data to JSON format
        // Optional Chaining
        setlistOfRestaurants(datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants); // Assigning the data to the state
        setFilteredRestaurants(datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants); // Assigning the data to the state
};

 const FilteredData = () => {  // Function to filter the data based on search text
        const filtered = listOfRestaurants.filter((item) =>  { 
                                return item.info && item.info.avgRating > 4.5
                                                             }
                                                 );
        setFilteredRestaurants(filtered);
 }

//  Conditional Rendering
//  if(listOfRestaurants.length == 0){
//         return <Shimmer />
//  }
 
return listOfRestaurants.length == 0 ? ( <Shimmer />) : (
        <div className="body">
                <div className="searchAndFilter">
                <div className="search">
                        <input type="text" className="textfield" value = {SearchText} onChange={(e) => { // Function to handle the change of search text
                                setSearchText(e.target.value);
                        }} />
                        <button className="search-btn" onClick={() => {
                                const filterSearch = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(SearchText.toLowerCase());
                                })
                                setFilteredRestaurants(filterSearch);
                        }}>Search</button>

                </div>
                <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            FilteredData();                         
                                                                        }}>
                            Top Restaurants
                        </button>
                </div>
                </div>
                <div className="resto_container">  
                                 
                                {
                                FilteredRestaurants.map((restaurants) => { // map through the filtered restaurants
                                        
                                        return  (
                                         <RestaurantCards key = {restaurants.info.id} restData = {restaurants} />  // pass the restaurant data to the RestaurantCards component 
                                                )                      }
                                                     )
                                }      
                </div>
        </div>
);
};

export default Body;
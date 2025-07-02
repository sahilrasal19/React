import RestaurantCards from "./RestaurantCards";
import rest_details from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

        
        const [listOfRestaurants, setlistOfRestaurants] = useState([]); // hooks can be used only in body component
        const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
        const [SearchText, setSearchText] = useState("");

useEffect( () => {
        fetchData();     
                    }, []);

const fetchData = async () => {
         const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.07480&lng=72.88560&str=spring%20fields&trackingId=f19a4c6a-bfc7-1b2c-dcee-06d3e88a95cb&submitAction=ENTER&queryUniqueId=ca85baaa-56ed-b6bb-a09e-70fcb6373c19"
        );
         
        const datajson = await data.json();
        // Optional Chaining
        setlistOfRestaurants(datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        setFilteredRestaurants(datajson?.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
};

 const FilteredData = () => { 
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
                        <input type="text" className="Empty" value = {SearchText} onChange={(e) => {
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
                                FilteredRestaurants.map((restaurants) => { 
                                        
                                        return  (
                                         <RestaurantCards key = {restaurants.info.id} restData = {restaurants.info} />  
                                                )                      }
                                                     )
                                }      
                </div>
        </div>
);
};

export default Body;
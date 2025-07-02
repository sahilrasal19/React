import RestaurantCards from "./RestaurantCards";
import rest_details from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () => {

        const [listOfRestaurants, setlistOfRestaurants] = useState([]); // hooks can be used only in body component

useEffect( () => {
        fetchData();     
                    
}, []);

const fetchData = async () => {
         const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.07480&lng=72.88560&str=spring%20fields&trackingId=f19a4c6a-bfc7-1b2c-dcee-06d3e88a95cb&submitAction=ENTER&queryUniqueId=ca85baaa-56ed-b6bb-a09e-70fcb6373c19"
        );
         
        const datajson = await data.json();
        setlistOfRestaurants(datajson.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants);
};

 const FilteredData = () => { 
        const filtered = listOfRestaurants.filter((item) =>  { 
                                return item.info && item.info.avgRating > 4.5
                                                             }
                                                 );
        setlistOfRestaurants(filtered);
 }
                
return (
        <div className="body">
                <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            FilteredData();                         
                                                                        }}>
                            Top Rated Restaurant
                        </button>
                </div>
                <div className="resto_container">  
                                 
                                {
                                listOfRestaurants.map((restaurants) => { 
                                        
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
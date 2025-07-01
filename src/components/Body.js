import RestaurantCards from "./RestaurantCards";
import rest_details from "../utils/mockData";
import { useState } from "react";



const Body = () => {

        const [listOfRestaurants, setlistOfRestaurants] = useState(rest_details);

return (
        <div className="body">
                <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            const filtered = listOfRestaurants.filter((item) =>  { return item.avgRating > 4.1}

                                 );
                                setlistOfRestaurants(filtered);
                                
}}>
                            Top Rated Restaurant
                        </button>
                </div>
                <div className="resto_container">  
                                 
                                {
                                listOfRestaurants.map((restaurants) => { 
                                        return  (
                                         <RestaurantCards key = {restaurants.id} restData = {restaurants} />  
                                                )                          }
                                                  )
                                }      
                </div>
        </div>
);
};

export default Body;
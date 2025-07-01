import RestaurantCards from "./RestaurantCards";
import rest_details from "../utils/mockData";
import { useState } from "react";

const Body = () => {
return (
        <div className="body">
                <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            return filtered = rest_details.filter((item) => 
                                {
                                    item.avgRating > 4.2;
                                } 
)}}>
                            Top Rated Restaurant
                        </button>
                </div>
                <div className="resto_container">  
                                 
                                {rest_details.map((restaurants) => { 
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
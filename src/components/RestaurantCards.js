import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
        const {restData} = props; // destructure restData from props
        const{
                cloudinaryImageId,
                name, 
                avgRating, 
                costForTwo, 
                cuisines} = restData?.info;  // Destructuring the restData object to get the required properties
return (
        <div className="resto_cards">
                <div className="food_image">
                        <img className="food_logo"
                        src={CDN_URL + cloudinaryImageId}>
                        </img>
                </div>
                        <div className="food_details">
                                <h3>{name}</h3> 
                                <h4>{avgRating}</h4> 
                                <h4>{costForTwo}</h4>
                                <h4>{cuisines.join(", ")}</h4>  
                        </div>
                    
        </div>
        // Displaying the restaurant name
        // join the array of cuisines with comma and space
);
};

export default RestaurantCards;
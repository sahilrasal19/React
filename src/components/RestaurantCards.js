import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
        const {restData} = props;
        const{name, avgRating, costForTwo, cuisines} = restData;
return (
        <div className="resto_cards">
                <div className="food_image">
                        <img className="food_logo"
                        src={CDN_URL + restData.cloudinaryImageId}>
                        </img>
                </div>
                        <div className="food_details">
                                <h3>{name}</h3>
                                <h4>{avgRating}</h4>
                                <h4>{costForTwo}</h4>
                                <h4>{cuisines.join(", ")}</h4>
                        </div>
                    
        </div>
);
};

export default RestaurantCards;
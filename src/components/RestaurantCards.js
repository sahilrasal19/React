import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { restData } = props; // destructure restData from props
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    restData?.info; // Destructuring the restData object to get the required properties
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 shadow-xl">
      <div className="food_image  item-center">
        <img
          className="food_logo items-center rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="food_details ">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>

        <h4>{sla.slaString}</h4>
      </div>
    </div>
    // Displaying the restaurant name
    // join the array of cuisines with comma and space
  );
};

export default RestaurantCards;

import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { restData } = props; // destructure restData from props
  // console.log(restData);
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    restData?.info || {}; // Destructuring the restData object to get the required properties

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg shadow-xl hover:bg-gray-200 shadow-xl transition-transform transform hover:scale-105"
    >
      <div className="food_image  item-center">
        <img
          className="food_logo items-center rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="food_details ">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div className="transition-transform transform hover:scale-105 ">
        <label className="absolute bg-green-500 text-white rounded-lg m-2 p-2 z-20">
          Promoted
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;

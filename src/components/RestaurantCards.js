import { CDN_URL } from "../utils/constants";

const RestaurantCards = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, sla } =
    restData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="w-[250px] m-3 p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl mb-3">
        <img
          className="w-full h-44 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Restaurant Details */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium pt-1">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded z-10 shadow-md">
          Promoted
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;

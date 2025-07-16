import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useonlineStatus from "../utils/useonlineStatus.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const onlineStatus = useonlineStatus();

  const [showIndex, setshowIndex] = useState(null);

  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-10 text-xl text-red-600 font-semibold">
        You are Offline. Please check your internet connection!
      </h1>
    );
  }

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="menu max-w-screen-md mx-auto text-center px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mb-2">{name}</h1>
        <p className="text-lg text-gray-600">{cuisines?.join(", ")}</p>
        <p className="text-md text-gray-500 mt-1 font-medium">
          {costForTwoMessage}
        </p>
      </div>

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category.card?.card}
            showItems={index === showIndex}
            setshowIndex={() =>
              setshowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useonlineStatus from "../utils/useonlineStatus.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams(); // get the resid from the url
  const resInfo = useRestaurantMenu(resid);
  const onlineStatus = useonlineStatus();

  const [showIndex, setshowIndex] = useState(null);

  if (onlineStatus == false) {
    return <h1>You are Offline. Please Check your internet connection!!</h1>;
  }

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center">
      <ul className=" ">
        <li className="font-bold my-6 text-2xl">{name}</li>
        <li className="text-2xl font-bold">{cuisines?.join(", ")}</li>
        <li className="text-lg font-bold">{costForTwoMessage}</li>
      </ul>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category.card?.card}
          showItems={index == showIndex && true}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

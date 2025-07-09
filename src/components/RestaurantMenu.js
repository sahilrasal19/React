import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useonlineStatus from "../utils/useonlineStatus.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resid } = useParams(); // get the resid from the url
  const resInfo = useRestaurantMenu(resid);
  const onlineStatus = useonlineStatus();

  if (onlineStatus == false) {
    return <h1>You are Offline. Please Check your internet connection!!</h1>;
  }

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemsInfo =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

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
        <li>{costForTwoMessage}</li>
      </ul>

      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.itemCards?.card?.info?.id}
          data={category.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

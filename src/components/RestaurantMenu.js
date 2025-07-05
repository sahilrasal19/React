import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useonlineStatus from "../utils/useonlineStatus.js";

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

  return (
    <div className="menu">
      <ul>
        <li>{name}</li>
        <li>{cuisines?.join(", ")}</li>
        <li>{costForTwoMessage}</li>
      </ul>
      <ul>
        {itemsInfo.map((item) => {
          return (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - {item.card.info.defaultPrice}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// ?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info

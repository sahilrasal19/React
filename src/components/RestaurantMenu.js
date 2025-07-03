import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import { MENU_URL } from "../utils/constants.js";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    const {resid} = useParams(); // get the resid from the url

    useEffect (() => {
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch(MENU_URL+ resid );

            const json = await data.json();
            console.log(json);
            setresInfo(json?.data);
            
    };

    if (resInfo == null) return <Shimmer />;
  
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info ;
    const itemsInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    
    return ( 
            <div className="menu">
                <ul>
                <li>{name}</li>
                <li>{cuisines?.join(", ")}</li>
                <li>{costForTwoMessage}</li>
                </ul>
                <ul>
                  {itemsInfo.map((item) => {
                    return(
                    <li key={item.card.info.id}>   {item.card.info.name} - {item.card.info.defaultPrice} </li>)
                    
})}
                    
                </ul>
            </div>
)
}

export default RestaurantMenu;

// ?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info
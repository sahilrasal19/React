import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants.js";
const useRestaurantMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();
    setresInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

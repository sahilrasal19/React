import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  // console.log(data);
  // const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="w-6/12 my-6 mx-auto p-4 bg-gray-50 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} - ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* {showItems && (
        <ItemsList key={data?.categoryId} items={data?.itemCards} />
      )} */}
      {showItems ? (
        <ItemsList key={data?.categoryId} items={data?.itemCards} />
      ) : null}
    </div>
  );
};

export default RestaurantCategory;

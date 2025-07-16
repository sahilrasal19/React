import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex(); // triggers parent-controlled toggle
  };

  return (
    <div className="w-full md:w-6/12 my-6 mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div
        className="flex justify-between items-center cursor-pointer px-5 py-4 border-b border-gray-200"
        onClick={handleClick}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {data?.title}{" "}
          <span className="text-gray-500">({data?.itemCards.length})</span>
        </h2>
        <span className="text-xl transition-transform duration-200">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {showItems && (
        <div className="px-5 py-3">
          <ItemsList key={data?.categoryId} items={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;

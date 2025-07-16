import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-4 m-4 border-b border-gray-200 shadow-md text-left flex justify-between"
        >
          {/* Text Section */}
          <div className="w-8/12 pr-4">
            <div className="font-semibold text-base mb-1">
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Image + Button Section */}
          <div className="w-4/12 relative flex flex-col items-center">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-28 object-cover rounded-lg"
              alt={item?.card?.info?.name}
            />
            <button
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;

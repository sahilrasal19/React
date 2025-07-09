import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-3 shadow-lg text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name} </span>
                <span>
                  Rupees -{" "}
                  {item?.card?.info?.price / 100
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="p-4 w-3/12">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;

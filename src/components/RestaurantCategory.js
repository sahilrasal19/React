import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-6/12 my-6 mx-auto p-4 bg-gray-50 shadow-lg ">
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data?.title} - ({data?.itemCards.length})
        </span>
        <span>^</span>
      </div>
      <ItemsList key={data?.categoryId} items={data?.itemCards} />
    </div>
  );
};

export default RestaurantCategory;

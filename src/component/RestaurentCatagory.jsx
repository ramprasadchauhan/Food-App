// import { useState } from "react";
import ItemList from "./ItemList";

/* eslint-disable react/prop-types */
const RestaurentCatagory = ({ data, showItem, setShowIndex, dumy }) => {
  // console.log(data);
  // const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-1/2 p-4 mx-auto my-2 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItem && <ItemList items={data.itemCards} dumy={dumy} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurentCatagory;

// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentCatagory from "./RestaurentCatagory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const dumy = "Dumy Data";

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // console.log(resId);

  const [showIndex, setShowIndex] = useState(null);
  /*
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}` + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };
  */
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = Object(
    resInfo?.cards[2]?.card?.card?.info
  );

  // const { itemCards } = Object(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
  // );
  // console.log(itemCards);

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  console.log(resInfo);
  const itemCatagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCatagories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl my-5">{name}</h1>
      <p className="font-bold">{cuisines?.join(", ")} </p>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" RS"}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {itemCatagories.map((resCatagory, index) => (
        // controlled component
        <RestaurentCatagory
          key={resCatagory?.card?.card?.title}
          data={resCatagory?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dumy={dumy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

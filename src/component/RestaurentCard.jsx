/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "./UserContext";

const RestaurentCard = (props) => {
  const { resData } = Object(props);
  const { loggedInUser } = useContext(UserContext);

  // Optional chaining
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = Object(
    resData?.card?.card?.restaurant?.info
  );
  // console.log(props);
  return (
    <div className="res-card m-3 p-4 w-[240px] h-[400px] bg-slate-100 hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-lg w-full h-[150px] hover:scale-105"
        src={`${CDN_URL}` + cloudinaryImageId}
        alt="image"
      />
      <h3 className="font-bold py-3 text-lg">{name} </h3>
      <h4>{cuisines?.join(", ")} </h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo / 100} Rupees </h4>
      <h4>User: {loggedInUser} </h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurentCard => RestaurentPramotedCard

// eslint-disable-next-line react-refresh/only-export-components
export const withPromotedLable = (ReataurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative -z-10 bg-red-500 text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;

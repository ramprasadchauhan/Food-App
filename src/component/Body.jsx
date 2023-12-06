import { useState, useEffect, useContext } from "react";
import RestaurentCard, { withPromotedLable } from "./RestaurentCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () => {
  // let listOfRestaurantsJS = [
  //   {
  //     card: {
  //       card: {
  //         restaurant: {
  //           info: {
  //             id: "80278",
  //             name: "Gaagar New Market",
  //             city: "55",
  //             slugs: {
  //               restaurant: "gaagar-tt-nagar-new-market",
  //               city: "bhopal",
  //             },
  //             cloudinaryImageId: "nhaax0gshegi6khog5th",
  //             address: "32/42, New Market, TT Nagar, Bhopal",
  //             areaName: "New Market",
  //             costForTwo: "30000",
  //             costForTwoMessage: "₹300 FOR TWO",
  //             cuisines: [
  //               "Sweets",
  //               "Beverages",
  //               "Desserts",
  //               "Chaat",
  //               "South Indian",
  //               "North Indian",
  //             ],
  //             avgRating: 4.3,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         restaurant: {
  //           info: {
  //             id: "80278",
  //             name: "Gaagar New Market",
  //             city: "55",
  //             slugs: {
  //               restaurant: "gaagar-tt-nagar-new-market",
  //               city: "bhopal",
  //             },
  //             cloudinaryImageId: "nhaax0gshegi6khog5th",
  //             address: "32/42, New Market, TT Nagar, Bhopal",
  //             areaName: "New Market",
  //             costForTwo: "30000",
  //             costForTwoMessage: "₹300 FOR TWO",
  //             cuisines: [
  //               "Sweets",
  //               "Beverages",
  //               "Desserts",
  //               "Chaat",
  //               "South Indian",
  //               "North Indian",
  //             ],
  //             avgRating: 4.3,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         restaurant: {
  //           info: {
  //             id: "80278",
  //             name: "Gaagar New Market",
  //             city: "55",
  //             slugs: {
  //               restaurant: "gaagar-tt-nagar-new-market",
  //               city: "bhopal",
  //             },
  //             cloudinaryImageId: "nhaax0gshegi6khog5th",
  //             address: "32/42, New Market, TT Nagar, Bhopal",
  //             areaName: "New Market",
  //             costForTwo: "30000",
  //             costForTwoMessage: "₹300 FOR TWO",
  //             cuisines: [
  //               "Sweets",
  //               "Beverages",
  //               "Desserts",
  //               "Chaat",
  //               "South Indian",
  //               "North Indian",
  //             ],
  //             avgRating: 3.9,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         restaurant: {
  //           info: {
  //             id: "80278",
  //             name: "Gaagar New Market",
  //             city: "55",
  //             slugs: {
  //               restaurant: "gaagar-tt-nagar-new-market",
  //               city: "bhopal",
  //             },
  //             cloudinaryImageId: "nhaax0gshegi6khog5th",
  //             address: "32/42, New Market, TT Nagar, Bhopal",
  //             areaName: "New Market",
  //             costForTwo: "30000",
  //             costForTwoMessage: "₹300 FOR TWO",
  //             cuisines: [
  //               "Sweets",
  //               "Beverages",
  //               "Desserts",
  //               "Chaat",
  //               "South Indian",
  //               "North Indian",
  //             ],
  //             avgRating: 3.5,
  //           },
  //         },
  //       },
  //     },
  //   },
  // ];
  const [listOfRestaurants, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withPromotedLable();

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.239583&lng=77.442253&str=veg&trackingId=10027316-2a7f-a2b3-24c5-b5cd52ce65cb&submitAction=ENTER&queryUniqueId=c02448cf-cb07-3b82-4e5f-866f8caa7eac"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurents(
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Your are offline, please check your internet connection</h1>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // console.log("Body rendered");

    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 mx-3 rounded-lg bg-green-200"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurent = listOfRestaurants.filter((res) =>
                res?.card?.card?.restaurant?.info?.cuisines.includes(searchText)
              );
              console.log(filteredRestaurent);
              setFilteredRestaurants(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 rounded-lg bg-gray-100"
            onClick={() => {
              // console.log("Button Clicked");
              //filter logic
              const filteredList = listOfRestaurants.filter(
                (res) => res?.card?.card?.restaurant?.info?.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
              // console.log(filteredList[1].card.card.restaurant.info.avgRating);
              console.log(filteredList);
            }}
          >
            Top Rated Rastaurents
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black px-2 ml-2"
            value={loggedInUser}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurants?.slice(1).map((restaurant, index) => (
          <Link
            key={index}
            to={"/restaurent/" + restaurant.card.card.restaurant.info.id}
          >
            {restaurant.card.card.restaurant.info.costForTwo / 100 > 250 ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard key={index} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

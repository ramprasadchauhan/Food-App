import { useEffect, useState, useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a selectore
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex sticky top-0 justify-between bg-pink-100 shadow-lg">
      <Title />
      <div className="flex items-center">
        <ul className="flex p-4 ">
          <li className="px-1">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-1">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-1">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-1">
            <Link to="/contect"> Contect Us </Link>
          </li>
          <li className="px-1">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-1 font-bold hover:bg-red-300">
            <Link to="/cart">cart🛒{cartItems.length} Items</Link>
          </li>
          <button
            className="px-1"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useonlineStatus();
  const [BtnName, setBtnName] = useState("LogIn");
  // if we use {btnName} in empty array of useEffect it will be called or re-rendered only when btnName changes
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-green-50 shadow-lg m-2 ">
      <div className="header_logo">
        <img className="w-40 h-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-1 px-6 ">
          <li className="px-4 font-bold hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            <Link to="/">Home</Link>{" "}
            {/* Home pe click kiya toh link to pe jo loc hai vaha jayega    */}
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            <Link to="/about">About Us</Link>
          </li>
          <Link to="/cart">
            <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
              Cart-({cartItems.length} items)
            </li>
          </Link>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            <Link to="/contact ">Contact Us</Link>
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
            <button
              className="login  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105"
              onClick={() =>
                BtnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
              }
            >
              {BtnName}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

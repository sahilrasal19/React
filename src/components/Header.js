import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";

const Header = () => {
  const onlineStatus = useonlineStatus();
  const [BtnName, setBtnName] = useState("LogIn");
  // if we use {btnName} in empty array of useEffect it will be called or re-rendered only when btnName changes

  return (
    <div className="flex justify-between bg-green-50 shadow-lg m-2">
      <div className="header_logo">
        <img className="w-40 h-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-1">
          <li className="px-4 font-bold hover:text-blue-400 cursor-pointer ">
            Online Status: {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>{" "}
            {/* Home pe click kiya toh link to pe jo loc hai vaha jayega    */}
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            Cart
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            <Link to="/contact ">Contact Us</Link>
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer">
            <button
              className="login  hover:text-blue-400 cursor-pointer "
              onClick={() =>
                BtnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
              }
            >
              {BtnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

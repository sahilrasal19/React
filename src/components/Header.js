import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [BtnName, setBtnName] = useState("LogIn");
  // if we use {btnName} in empty array of useEffect it will be called or re-rendered only when btnName changes
  return (
    <div className="header">
      <div className="header_logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
            {/* Home pe click kiya toh link to pe jo loc hai vaha jayega    */}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <button
              className="login"
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

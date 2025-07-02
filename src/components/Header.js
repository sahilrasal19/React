import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

        const [BtnName, setBtnName] = useState("LogIn")
return (
        <div className="header">
                <div className="header_logo">
                        <img className = "logo"  
                        src= {LOGO_URL} 
                        />
                </div>
                <div className="Navbar">
                        <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Cart</li>
                                <li>Contact Us</li>
                                <li>
                                        <button className="login" onClick={() => BtnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")}>
                                                {BtnName}
                                        </button>
                                </li>
                        </ul>
                </div>
        </div>
);
};

export default Header;
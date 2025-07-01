import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                        </ul>
                </div>
        </div>
);
};

export default Header;
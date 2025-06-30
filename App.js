import React from "react";
import { createRoot } from "react-dom/client";

/*
Header
*/

const Header = () => {
return (
        <div className="header">
                <div className="header_logo">
                        <img className = "logo"  
                        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTqVNowhzVuJsQ-D6VGFEQ_g5-uIDYQyU6Q&s"/>
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
)
}

const RestaurantCards = () => {
return (
        <div className="resto_cards">
                <div className="food_image">
                        <img className="food_logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdXryjL4CrgeSA3lgHfai01rbj1gVHY0zIg&s">
                        </img>
                </div>
                        <div className="food_details">
                                <h3>Spring Fields</h3>
                                <h4>Pav Bhaji Special</h4>
                                <h4>4.4 Stars</h4>
                                <h4>38 Minutes</h4>
                        </div>
                                
                     
                
        </div>
)
}

const Body = () => {
return (
        <div className="body">
                <div className="search">
                        Search
                </div>
                <div className="resto-container">
                        <div>
                                <RestaurantCards/>
                        </div>
                </div>
        </div>
)
}

const AppLayout = () => {
return (
        <div>
                <Header/>
                <Body/>
        </div>
)

}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
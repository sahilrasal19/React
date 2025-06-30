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

const RestaurantCards = (props) => {
        const {restData} = props;
return (
        <div className="resto_cards">
                <div className="food_image">
                        <img className="food_logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdXryjL4CrgeSA3lgHfai01rbj1gVHY0zIg&s">
                        </img>
                </div>
                        <div className="food_details">
                                <h3>{restData.Restaurant_Name}</h3>
                                <h4>{restData.Restaurant_Type}</h4>
                                <h4>{restData.Ratings_for_Swiggy}</h4>
                                <h4>{restData.Timing}</h4>
                        </div>
                    
        </div>
)
}
const rest_details =
[
    {
        "Restaurant_Name": "Sample Restaurant 1",
        "URL": "https://www.sample-restaurant1.com",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings_for_Swiggy": 4.5
    },
    {
        "Restaurant_Name": "Sample Restaurant 2",
        "URL": "https://www.sample-restaurant2.com",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings_for_Swiggy": 4.0
    },
    
]


const Body = () => {
return (
        <div className="body">
                <div className="search">
                        Search
                </div>
                <div className="resto_container">  
                                 
                                {rest_details.map((restaurants , index) => { 
                                        return  (
                                         <RestaurantCards key = {index} restData = {restaurants} />  
                                                )                          }
                                                  )
                                }      
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
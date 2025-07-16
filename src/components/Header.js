import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useonlineStatus();
  const [BtnName, setBtnName] = useState("LogIn");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-green-600 w-full">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-24 h-auto object-contain"
          />
          <span className="text-3xl font-extrabold text-green-700 tracking-wide">
            FoodExpress
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap items-center gap-6 text-lg font-bold text-gray-800">
          <li className="hover:text-green-600 transition">
            Online: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="hover:text-green-600 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-600 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-green-600 transition">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-green-600 transition">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="relative hover:text-green-600 transition">
            <Link to="/cart" className="flex items-center">
              Cart
              <span className="ml-2 bg-red-600 text-white text-sm rounded-full px-2 py-0.5 font-bold shadow-md">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li>
            <button
              className="px-5 py-1.5 border-2 border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
              onClick={() =>
                setBtnName(BtnName === "LogIn" ? "LogOut" : "LogIn")
              }
            >
              {BtnName}
            </button>
          </li>
          <li className="text-green-700 font-extrabold">{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

// import { LOGO_URL } from "../utils/constants";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import useonlineStatus from "../utils/useonlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const onlineStatus = useonlineStatus();
//   const [BtnName, setBtnName] = useState("LogIn");
//   // if we use {btnName} in empty array of useEffect it will be called or re-rendered only when btnName changes
//   const { loggedInUser } = useContext(UserContext);
//   const cartItems = useSelector((store) => store.cart.items);
//   // console.log(cartItems);
//   return (
//     <div className="flex justify-between bg-green-50 shadow-lg m-2 ">
//       <div className="header_logo">
//         <img className="w-40 h-30" src={LOGO_URL} />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex p-4 m-1 px-6 ">
//           <li className="px-4 font-bold hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//             Online Status: {onlineStatus ? "✓" : "🔴"}
//           </li>
//           <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//             <Link to="/">Home</Link>{" "}
//             {/* Home pe click kiya toh link to pe jo loc hai vaha jayega    */}
//           </li>
//           <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//             <Link to="/about">About Us</Link>
//           </li>
//           <Link to="/cart">
//             <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//               Cart-({cartItems.length} items)
//             </li>
//           </Link>
//           <Link to="/contact">
//             <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//               Contact Us
//             </li>
//           </Link>
//           <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li className="px-4 font-bold  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105">
//             <button
//               className="login  hover:text-blue-400 cursor-pointer text-lg transition-transform transform hover:scale-105"
//               onClick={() =>
//                 BtnName == "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
//               }
//             >
//               {BtnName}
//             </button>
//           </li>
//           <li>{loggedInUser}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

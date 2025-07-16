import UserContext from "../utils/UserContext.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");

    return (
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-green-700 mb-6 border-b pb-2">
          About Us
        </h1>
        {/* User functional component */}
        <div className="mb-6 font-bold">
          <User name="SAHIL RASAL" location="Mumbai" contact="9321578345" />
        </div>
        {/* User class component */}
        <div className="mb-6 font-bold">
          <UserClass name="SAHIL RASAL" location="Mumbai" contact="394286937" />
        </div>
        {/* UserContext usage */}
        <div className="mt-4 p-4 bg-white rounded-md shadow-md font-bold">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Logged In User:
          </h2>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <p className="text-lg font-medium text-green-600">
                {loggedInUser}
              </p>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;

import UserContext from "../utils/UserContext.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import React, { useState } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <User name={"SAHIL RASAL"} location={"Mumbai"} contact={"3942837"} />
        <UserClass
          name={"SAHIL RASAL"}
          location={"Mumbai"}
          contact={"394286937"}
        />
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <User name={"SAHIL RASAL"} location={"Mumbai"} contact={"3942837"} />
//       <UserClass
//         name={"SAHIL RASAL"}
//         location={"Mumbai"}
//         contact={"394286937"}
//       />
//     </div>
//   );
// };

export default About;

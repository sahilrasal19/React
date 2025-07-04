import User from "./User.js";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name={"SAHIL RASAL"} location={"Mumbai"} contact={"3942837"} />
      <UserClass
        name={"SAHIL RASAL"}
        location={"Mumbai"}
        contact={"394286937"}
      />
    </div>
  );
};

export default About;

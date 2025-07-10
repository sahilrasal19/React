import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "User Logged In",
});
export default UserContext;

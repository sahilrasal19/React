import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  // const [count, setcount] = useState(0);

  return (
    <div>
      <h1>NAME: {name}</h1>
      {/* <button
        onClick={() => {
          console.log(count);
          const increment = count + 1;
          setcount(increment);
        }}
      >
        Count:{count}
      </button> */}
      <h2>Location: {location} </h2>
      <h3>Contact: {contact} </h3>
    </div>
  );
};

export default User;

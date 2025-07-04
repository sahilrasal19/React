import { useRouteError } from "react-router-dom"; // Import the useRouteError hook

const Error = () => {
  const err = useRouteError(); // Get the error from the route
  console.log(err);
  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;

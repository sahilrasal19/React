import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>NAME:{name}</h1>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          /increase count button
        </button>

        <h2>Location: {location} </h2>
        <h3>Contact: {contact} </h3>
      </div>
    );
  }
}
export default UserClass;

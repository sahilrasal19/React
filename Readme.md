# React

<!--
Structure or Flow of the Program:
Header
    -Logo
    -Nav Items
Body
    -Search
    -Restaurant Container
        -Restaurant Cards
        -Img
        -Name of rest, Cuisine, Ratings, Delivery Time
Footer
    -Copyright
    -Links
    -Address
    -Contact
-->

<!--
Two types of export and import

default Export/Import

export default Component;
import Component from Path;

Named Export/Import is used for multiple imports and exports

export const Component;
import { Component } from Path;
-->

<!--
React hooks
Types
useState() -- superpowerful react variables
useEffect() --
-->

<!--
// this postcssrc is a way to make sure our project understands postcss and config is to tell parcel that pls understand our tailwind framework
-->

<!--
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
}

.header_logo {
  height: 116.8px;
}

.logo {
  width: 150px;
  height: 139px;
}

.Navbar {
  padding: 0px 20px;
  margin-top: 0px;
}

.Navbar > ul {
  list-style-type: none;
  padding: 10px;
  display: flex;
  font-size: 24px;
  align-items: center;
  font-family: Arial, sans-serif;
}

.Navbar > ul > li {
  padding: 10px;
}

.Navbar > ul > li:hover {
  cursor: pointer;
  color: orange;
}

.login {
  background-color: orange;
  color: black0;
  border: 1px solid rgb(157, 110, 22);
  height: 50px;
  width: 100px;
}

.login:hover {
  cursor: pointer;
  border: 1px solid black;
  background-color: rgb(242, 158, 4);
  color: aliceblue;
}

.body {
  border: 1px solid black;
}

.resto_cards {
  width: 200px;
  height: 350px;
  padding: 5px;
  margin: 10px;
  background-color: whitesmoke;
}

.resto_cards:hover {
  cursor: pointer;
  border: 1px solid black;
}

.food_image {
  width: 200px;
  height: 129px;
}
.food_logo {
  padding: 5px;
  width: 190px;
  border-radius: 0%;
  height: 140px;
}

.filter {
  /* margin: 10px; */
  padding: 10px;
  font-size: 25px;
}
.filter-btn {
  background-color: orange;
  color: rgb(5, 5, 5);
  border: 1px solid rgb(192, 78, 78);
  height: 30px;
}

.filter-btn:hover {
  cursor: pointer;
  border: 1px solid black;
  color: whitesmoke;
  background-color: rgb(242, 158, 4);
}

.food_details {
  margin: 0px;
  margin-left: 5px;
}

.resto_container {
  display: flex;
  flex-wrap: wrap;
}

.shimmer-container {
  display: flex;
  flex-wrap: wrap;
}

.shimmer-card {
  background-color: rgb(235, 234, 234);
  margin: 10px;
  width: 200px;
  height: 350px;
}

.textfield {
  margin-top: 5px;

  color: rgb(5, 5, 5);
  border: 1px solid rgb(5, 5, 5);
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
}

.search {
  margin-top: 10px;
}

.search-btn {
  background-color: orange;
  color: rgb(5, 5, 5);
  border: 1px solid rgb(192, 78, 78);
  height: 30px;
}

.search-btn:hover {
  cursor: pointer;
  color: aliceblue;
  background-color: rgb(242, 158, 4);
}

.searchAndFilter {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 5px;
}
-->

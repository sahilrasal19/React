import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
    "h1", //tag creation
    {id : "heading" , xyz : "sahil"}, // used to define attributes
    "SAHIL GREATEST CODER" //text content or what we want inside the tag can be text,another element anything
); //creates object and html tag for react

        const root = createRoot(document.getElementById("root")); //creates a root where all react dom manipulations take place
        root.render(heading); //converts the object created by React.createElement into html tag that the browser can understand 
        // basically putting tag into our html page 
        // and also if another tag is written inside div tag in html then this render replaces that with the react made tags only inside the created root 

const parent = React.createElement(
    "div",
    {id : "parent1"},
             React.createElement( //we can give child as third argument i.e another element
    "div",
    {id : "child1"},
            [React.createElement( // if we want to have siblings we need to create array of those tags
    "h1",
    {id : "sibling1"},
    "heading 1 baby"
    ),
            React.createElement(
    "h2",
    {id : "sibling2"},
    "heading 2 baby"
    )],
    )

)
const heading = React.createElement(
    "h1", //tag creation
    {id : "heading" , xyz : "sahil"}, // used to define attributes
    "SAHIL GREATEST CODER" //text content or what we want inside the tag can be text,another element anything
); //creates object and html tag for react

        const root = ReactDOM.createRoot(document.getElementById("root")); //creates a root where all react dom manipulations take place
        root.render(heading); //converts the object created by React.createElement into html tag that the browser can understand
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
return (
        <div>
                <Header/>
                <Body/>
        </div>
)
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
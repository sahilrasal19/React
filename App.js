import React from "react";
import { createRoot } from "react-dom/client";

const head = <p>rohit sharma</p>
const Title = () => (
        <p>Virat kohli Goat</p>
)
const number = 1000;
const Heading2 = () => (
        <div>
                <h2>Sahil loves React</h2>
                <h3>Sahil loves jsx</h3>
        </div> 
)
const Heading1 = () => (
        <div>
                <h1>Sahil loves JS</h1>
                <Heading2/>
                {Title()} 
                {head}
                {number}
                { 100+200}  
        </div>
)

const root = createRoot(document.getElementById("root"));
root.render(<Heading1/>);
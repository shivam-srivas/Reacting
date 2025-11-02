import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

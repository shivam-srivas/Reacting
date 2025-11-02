import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const title = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>React Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

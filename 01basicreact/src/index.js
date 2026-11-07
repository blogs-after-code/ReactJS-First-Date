import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <App />
  
);

// react dom also known as virtual dom is a lightweight copy of the real dom. It is a representation of the real dom in memory. It is used to improve the performance of the application by minimizing the number of updates to the real dom. When a component's state or props change, React creates a new virtual dom and compares it with the previous virtual dom. It then calculates the minimum number of changes required to update the real dom and applies those changes. This process is called reconciliation.

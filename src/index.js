import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const sid = "siddharth";
  return <h1>Hello React! How are you {sid}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <reactstrict>
    <App />
  </reactstrict>
);

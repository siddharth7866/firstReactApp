import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const sid = "siddharth";
  return (
    <div>
      <h1>Hello React! How are you {sid}!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/salamino.jpg" alt="pizza salamino" />
      <h1>"Pizza Spinaci"</h1>
      <p>
        <strong>"Tomato, mozarella, ham, aragula, and burrata cheese"</strong>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <reactstrict>
    <App />
  </reactstrict>
);

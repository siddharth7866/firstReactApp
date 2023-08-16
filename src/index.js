import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  // const sid = "siddharth";

  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Welcome To Pizzeria Cafe</h1>;
}

function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHours = 11;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);

  return (
    <div>
      <footer>{new Date().toLocaleTimeString()} Restaurant is open!</footer>
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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

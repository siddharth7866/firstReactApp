import React from "react";
import ReactDOM from "react-dom/client";

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
  <reactstrict>
    <App />
  </reactstrict>
);

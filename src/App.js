import "./App.css";
import CartItems from "./componets/CartItems";
import Categories from "./componets/Categories";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import YML from "./componets/YML";
import React, { useState } from "react";

function App() {
  const [qItems, setQItems] = useState(3);

  return (
    <>
      <Header />
      <Categories />
      <main>
        <CartItems qItems={qItems} />
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="number-items">
            <h4 className="number-text">Number of items</h4>
            <h4 className="number">3</h4>
          </div>
          <hr />
          <div className="total">
            <p className="total-text">total:</p>
            <h4 className="total-number">$3,560.00</h4>
          </div>
          <button className="checkout-button">
            <h4 className="button-check-text">Proceed to Checkout</h4>
          </button>
          <button className="continue-button">
            <h4 className="button-continue">Continue Shoping</h4>
          </button>
        </div>
      </main>
      <YML />
      <Footer />
    </>
  );
}

export default App;

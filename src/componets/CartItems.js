import "./CartItems.css";
import Pack1 from "./Pack1";
import Pack2 from "./Pack2";
import Pack3 from "./Pack3";
import React, { useState } from "react";

function CartItems(props) {
  const [qItems, setQItems] = useState(props.qItems);
  return (
    <>
      <div className="cart-items">
        <h2 className="tittle">Your Cart</h2>
        {qItems === 3 ? (
          <>
            <Pack1 /> <Pack2 /> <Pack3 />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default CartItems;

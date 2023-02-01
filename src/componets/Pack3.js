import "./Pack3.css";
import React, { useState } from "react";

function Pack3(props) {
  const [quantity, setQuantity] = useState(20);
  const [price, setPrice] = useState(36.5);
  const [visible, setVisible] = useState(true);
  const countD = () => {
    setQuantity(quantity - 1);
  };
  const remove = () => {
    setVisible(false);
  };
  if (visible) {
    return (
      <>
        <div className="pack3">
          <div className="photo">{/* fotos */}</div>
          <div className="content">
            <div className="mcpk">
              <h3>Woman bottle</h3>
              <h3>$ {price.toFixed(2)}</h3>
            </div>
            <div className="quantity">
              <div className="quantity-box">
                <div className="q-box">
                  <p>Quantity:</p>
                  <p>{quantity}</p>
                  {quantity > 0 ? (
                    <button onClick={countD} className="arrow">
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96296 0.5L4 3.44191L1.03778 0.5L0 1.52941L4 5.5L8 1.52941L6.96296 0.5Z"
                          fill="#091625"
                        />
                      </svg>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="total-q">
                <p>Total:</p>
                <h4>${(quantity * price).toFixed(2)}</h4>
              </div>
            </div>
            <div className="options">
              <button onClick={remove} className="remove">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H0V5H1V15C1 15.6 1.4 16 2 16H14C14.6 16 15 15.6 15 15V5H16V3H12V1ZM6 2H10V3H6V2ZM13 5V14H3V5H13Z"
                    fill="#091625"
                  />
                </svg>
                <p className="text-remove">Remove</p>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pack3;

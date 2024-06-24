import React from "react";
// import { useContext } from "react";
import { useCart } from "../Context/Cart";

const items = ({ name, price }) => {
  const cart =useCart();

  return (
    <>
      <div className="items">
        <h3>{name}</h3>
        <p>Price $ {price}</p>
        <button
          style={{
            color: "white",
            background: "green",
            padding: 10,
            borderRadius: 2,
            border: 0,
            cursor: "pointer",
          }}
          onClick={() =>
            cart.setItems([...cart.items, { name: name, price: price }])
          }
        >
          Add To Card!
        </button>
      </div>
    </>
  );
};

export default items;

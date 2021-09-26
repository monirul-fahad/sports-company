import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  for (const club of cart) {
    // console.log(club.name);
    total = total + club.value;
  }

  return (
    <div className="text-center">
      <h2>Order Summary</h2>
      <h4>Club Added: {props.cart.length}</h4>
      <h6>Total Ammount: ${total}</h6>
    </div>
  );
};
export default Cart;

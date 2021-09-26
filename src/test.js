import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  console.log(cart);
  let total = 0;
  for (const club of cart) {
    total = total + club.value;
  }

  let clubNames = [];
  cart.map((clubName) => (clubNames = [...clubNames, clubName.name]));

  const nameList = clubNames.map((name) => <div>{name}</div>);
  console.log(nameList);

  return (
    <div className="text-center">
      <h2>Order Summary</h2>
      <h4>Club Added: {props.cart.length}</h4>
      <h6>Total Ammount: ${total}</h6>
      <h5 className="added-club-name">{nameList}</h5>
    </div>
  );
};

export default Cart;

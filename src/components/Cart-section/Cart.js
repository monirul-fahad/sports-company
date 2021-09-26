import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGavel } from "@fortawesome/free-solid-svg-icons";
import Added from "./Added";
import "./Cart.css";
const Cart = (props) => {
  //fontawesome icon
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const auction = <FontAwesomeIcon icon={faGavel} />;
  const { cart } = props;

  let total = 0;
  for (const club of cart) {
    total = total + club.value;
  }

  return (
    <div className="text-center cart">
      <h2>Selected Clubs {cartIcon}</h2>
      <h5>
        Club Added: <span className="fw-bold"> {props.cart.length}</span>
      </h5>
      <h6>
        Total Ammount: <span className="fw-bold"> ${total}</span>
      </h6>
      <div className="my-4">
        {cart.map((clubName) => (
          <Added key={clubName.id} clubName={clubName} />
        ))}
      </div>
      <button className="btn btn-success px-5">Bid Now {auction}</button>
    </div>
  );
};

export default Cart;

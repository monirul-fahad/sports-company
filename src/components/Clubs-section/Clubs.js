import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Clubs.css";
const Clubs = (props) => {
  //   console.log(props);
  const { name, country, founded, president, stadium, value, img } = props.club;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="col">
      <div className="card h-100 card-bg">
        <img src={img} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <div className="card-text ps-2 text-center">
            <p className="my-1">
              Country: <span className="fw-bold">{country}</span>
            </p>
            <p className="my-1">
              Founded in: <span className="fw-bold">{founded}</span>
            </p>
            <p className="my-1">
              President: <span className="fw-bold">{president}</span>
            </p>
            <p className="my-1">
              Stadium: <span className="fw-bold">{stadium}</span>
            </p>
            <p className="my-1">
              Current Value: <span className="fw-bold">${value}</span>
            </p>
          </div>
        </div>
        <div className="mb-2 text-center">
          <button
            onClick={() => props.handleAddToCart(props.club)}
            className="btn btn-warning px-5"
          >
            {cartIcon} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clubs;

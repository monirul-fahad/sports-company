import React, { useEffect, useState } from "react";
import Cart from "../Cart-section/Cart";
import Clubs from "../Clubs-section/Clubs";
import "./Shop.css";
const Shop = () => {
  const [clubs, setClubs] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);

  //event handeler
  const handleAddToCart = (club) => {
    const newCart = [...cart, club];
    setcart(newCart);
  };
  return (
    <div className="shop">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {clubs.map((club) => (
                <Clubs
                  key={club.id}
                  club={club}
                  handleAddToCart={handleAddToCart}
                ></Clubs>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

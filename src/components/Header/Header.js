import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  const footballIcon = <FontAwesomeIcon icon={faFutbol} />;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">All Clubs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Top Clubs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Categories</a>
              </li>
            </ul>
            <form className="d-flex flex-fill mx-5">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type here to search clubs"
                aria-label="Search"
              />
              <button className="btn btn-warning px-5 fw-bold" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="text-center py-4 banner">
        <h1 className="banner-name">Auction Sports {footballIcon}</h1>
        <h5>
          Choose clubs within your budget and make an awesome sports invesment
          company.
        </h5>
        <h2 className="banner-name">Total Budget: $10 Billion.</h2>
      </div>
    </div>
  );
};

export default Header;

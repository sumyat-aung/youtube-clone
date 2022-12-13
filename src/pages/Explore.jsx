import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="explore-feed">
      <div className="explore-wrapper">
        <Link to={"/gaming"} className="explore-items">
          <i className="fa-solid fa-gamepad"></i> Gaming
        </Link>
        <Link to={"/beauty"} className="explore-items">
          <i className="fa-solid fa-vest"></i> Fashion & Beauty
        </Link>
        <Link to={"/learning"} className="explore-items">
          <i className="fa-solid fa-graduation-cap"></i> Learning
        </Link>
        <Link to={"/sports"} className="explore-items">
          <i className="fa-solid fa-medal"></i> Sports
        </Link>
      </div>
      <div className="trending">
        <h1>Trending Videos</h1>
      </div>
    </div>
  );
};

export default Explore;

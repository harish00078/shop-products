import React from "react";
import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <div className="navbar" >
      <div>
      <Link to="/">Home</Link>

      </div>

      <div style={{display:'inline-block'}}>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};

export default NavigationBar;

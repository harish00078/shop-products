// here we are creating the home-page or component:

// first we need to import the react from the react:
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Shop-here</h2>
      <h2>
        <Link to='/products'> products-Page
        </Link>
      </h2>
    </div>
  );
};

// here we are exporting the home-page:
export default HomePage;
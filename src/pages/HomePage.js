// here we are creating the home-page or component:

// first we need to import the react from the react:
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="mt-4">
      <h2>Shop-here</h2>
      <h2>
      Click-Here:- 
        <Link to='/products'>products-Page
        </Link>
      </h2>
    </Container>
  );
};

// here we are exporting the home-page:
export default HomePage;
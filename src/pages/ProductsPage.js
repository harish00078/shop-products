// here we are creating the products-page:
// import React from "react";
// first we need to import (useState and useEffect) hook:
// so that we can get the data for this component from our (api-function).
// and also manage that data:
import { useState, useEffect } from "react";
// second we import the (Link) function of the (react-router-dom) library:
// so that we can gave other pages links to this pages elements:
import { Link } from "react-router-dom";
// third we import the particular api-function:which we have particularly created for this page component:
import { getProducts } from "../api";

import { Container,ListGroup } from "react-bootstrap";

// know we create the (ProductsPage):
const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // under useEffect hook:we create the function.with the help of (async-await) method:
    // because under this function we are getting the data from our api-function:
    // and with the help of (async-await) method we will get our data from the api-function:
    // so that our application did not get crash.while getting the data:
    const fetchProducts = async () => {
      // under this function we also use the (try) and (catch) method:
      // so that if something goes wrong while getting the data from our api-function:
      // our application did not get crash:
      // and also we are able to get the (error).which causes the crash in our application:
      try {
        const response = await getProducts();
        console.log("response: ", response);

        setProducts(response.products);

        // setProducts();
      } catch (error) {
        console.error("error while fetching data: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container className="mt-4">
      <h2>Products Page</h2>
      {/* <div className="home-page">
        <h1>
          <Link to="/">Home - page</Link>
        </h1>
      </div> */}
 

      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              <p style={{cursor:'pointer'}}>Click-Here: Detials</p>
            </Link>

            <div className="product-title">
              <h2> Product-{product.id}:- {product.title}</h2>
            </div>
            <div className="products">
              <div>
                <h3>Price:- {product.price}</h3>
              </div>
              <div className="product-image">
                <div className="first-image">
                  <img alt="" src={product.images[0]} />
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ProductsPage;




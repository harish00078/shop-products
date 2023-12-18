import React, { useEffect, useState } from "react";
// here we are using the (useParams) package of the react-router-dom library:
// because in this component.we need to pass the parameters or unique-id to our api-function:
// for getting the data of the particular unique-id or product:
// IMP = Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
import { useParams } from "react-router-dom";
import { getProductById } from "../api";

import { Container } from "react-bootstrap";

const ProductDetailPage = () => {
  // here we getting (id) of our product:with the help of useParams package of the react-router-dom library;
  // IMP = Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        console.log("response: ", response);
        setProduct(response);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <div className="product-detail">
        <h2 >Product Detail Page</h2>
        <h1>{product.brand}</h1>

        <h2>Product:- {product.title}</h2>
        <h2>Price:- {product.price}</h2>
        <h2>
          <div className="product-rating">Rating:- {product.rating}</div>
        </h2>

        <h3>Description:- {product.description}</h3>
        <div className="product-image">
          <div className="first-image">
            <img
              alt=""
              src={product.images[1]}
              style={{ display: "block-inline" }}
            />
            <img
              alt=""
              src={product.images[2]}
              style={{ display: "block-inline" }}
            />
            <img
              alt=""
              src={product.images[3]}
              tyle={{ display: "block-inline" }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;

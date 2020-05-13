import React, { useState } from "react";
import products from "../../data";
import { connect } from "react-redux";
import { addCart } from "../../actions/addAction";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";

function Home({ addCart }) {
  return (
    <div className={styles.container}>
      {products.map((data) => (
        <div className={styles.image} key={data.id}>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant='top' src={data.image} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.desc}</Card.Text>
              <Card.Title>{data.price}</Card.Title>
              <Button onClick={() => addCart(`${data.id}`)} variant='dark'>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default connect(null, {
  addCart,
})(Home);

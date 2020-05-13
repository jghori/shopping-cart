import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../../actions/productQuantity";
import styles from "./Cart.css";

function Cart({ cartProps, productQuantity, clearProduct }) {
  let productsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product) => {
    return (
      <Fragment>
        <div className='product'>
          <ion-icon
            onClick={() => clearProduct(product.id)}
            name='close-circle'
          ></ion-icon>
          <img src={product.image} />
          <span className='sm-hide'>{product.name}</span>
        </div>
        <div className='price sm-hide'>${product.price}.00</div>
        <div className='quantity'>
          <ion-icon
            onClick={() => productQuantity("decrease", product.id)}
            className='decrease'
            name='arrow-back-circle-outline'
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product.id)}
            className='increase'
            name='arrow-forward-circle-outline'
          ></ion-icon>
        </div>
        <div className='total'>${product.numbers * product.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className='container-products'>
      <div className='product-header'>
        <h5 className='product-title'>PRODUCTS</h5>
        <h5 className='price sm-hide'>PRICE</h5>
        <h5 className='quantity'>QUANTITY</h5>
        <h5 className='total'>TOTAL</h5>
      </div>
      <div className='products'>{productsInCart}</div>
      <div className='cartTotalContainer'>
        <h4 className='cartTotalTitle'>Cart Total</h4>
        <h4 className='cartTotal'>${cartProps.cartCost}.00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);

import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;

import React from "react";
import { CartItemType } from "@types";
import "./cart-item.styles.scss";

function CartItem({ cartItem: { imageUrl, price, name, quantity } }: CartItemType) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default React.memo(CartItem);

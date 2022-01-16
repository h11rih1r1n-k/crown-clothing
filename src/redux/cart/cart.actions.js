import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.constants";

const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export { toggleCartHidden, addItem };

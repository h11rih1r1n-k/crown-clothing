import { TOGGLE_CART_HIDDEN } from "./cart.constants";

const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};

export { toggleCartHidden };

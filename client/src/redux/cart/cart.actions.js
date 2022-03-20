import CartConstants from "./cart.constants";

export const toggleCartHidden = () => {
  return {
    type: CartConstants.TOGGLE_CART_HIDDEN,
  };
};

export const setCartItemsFromFirestore = (cartItems) => {
  return {
    type: CartConstants.SET_CART_ITEMS_FROM_FIRESTORE,
    payload: cartItems,
  };
};

export const addItem = (item) => {
  return {
    type: CartConstants.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CartConstants.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartConstants.REMOVE_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CartConstants.CLEAR_CART,
  };
};

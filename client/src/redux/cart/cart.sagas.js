import {
  takeLatest,
  call,
  all,
  put,
  select,
  takeEvery,
} from "redux-saga/effects";
import UserConstants from "../user/user.constants";
import CartConstants from "./cart.constants";
import { setCartItemsFromFirestore, clearCart } from "./cart.actions";
import {
  getCurrentUser,
  checkUserCartItems,
  updateUserCartItems,
} from "../../firebase/firebase.utils";
import { selectCartItems } from "./cart.selectors";

function* setUserCartItems({ payload: { id } }) {
  try {
    const cartItems = yield checkUserCartItems(id);
    yield put(setCartItemsFromFirestore(cartItems));
  } catch (error) {
    console.log("error getting cart items");
  }
}
function* onSignInSuccess() {
  yield takeLatest(UserConstants.SIGN_IN_SUCCESS, setUserCartItems);
}

function* updateCartStore() {
  try {
    const userRef = yield getCurrentUser();
    const cartItems = yield select(selectCartItems);
    yield updateUserCartItems(userRef.uid, cartItems);
  } catch (error) {
    console.log("error updating cart");
  }
}
function* onCartChange() {
  yield takeEvery(
    [
      CartConstants.ADD_ITEM,
      CartConstants.REMOVE_ITEM,
      CartConstants.CLEAR_ITEM_FROM_CART,
    ],
    updateCartStore
  );
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}
function* onSignOutSuccess() {
  yield takeLatest(UserConstants.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange),
  ]);
}

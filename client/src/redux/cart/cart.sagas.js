import { takeLatest, call, all, put } from "redux-saga/effects";
import UserConstants from "../user/user.constants";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}
function* onSignOutSuccess() {
  yield takeLatest(UserConstants.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

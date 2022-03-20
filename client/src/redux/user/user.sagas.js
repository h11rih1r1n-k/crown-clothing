import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import UserConstants from "./user.constants";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

function* getSnapShotFromUser(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUser(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserConstants.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserConstants.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* checkUserSession() {
  yield takeLatest(UserConstants.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess(null));
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* onSignOutStart() {
  yield takeLatest(UserConstants.SIGN_OUT_START, signOut);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    yield getSnapShotFromUser(user, additionalData);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signUpWithEmailAndPassword({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* onSignUpStart() {
  yield takeLatest(UserConstants.SIGN_UP_START, signUpWithEmailAndPassword);
}

function* onSignUpSuccess() {
  yield takeLatest(UserConstants.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* passwordResetEmail({ payload }) {
  try {
    yield auth.sendPasswordResetEmail(payload);
    yield alert("Password reset email sent");
  } catch (error) {
    console.log("Password reset email sent failure");
  }
}
function* sendPasswordResetEmailStart() {
  yield takeLatest(
    UserConstants.SEND_PASSWORD_RESET_EMAIL_START,
    passwordResetEmail
  );
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(checkUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(sendPasswordResetEmailStart),
  ]);
}

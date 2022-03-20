import UserConstants from "./user.constants";

export const googleSignInStart = () => {
  return {
    type: UserConstants.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (email, password) => {
  return {
    type: UserConstants.EMAIL_SIGN_IN_START,
    payload: { email, password },
  };
};
export const signInSuccess = (user) => {
  return {
    type: UserConstants.SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const signInFailure = (error) => {
  return {
    type: UserConstants.SIGN_IN_FAILURE,
    payload: error,
  };
};

export const checkUserSession = () => {
  return {
    type: UserConstants.CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: UserConstants.SIGN_OUT_START,
  };
};
export const signOutSuccess = (user) => {
  return {
    type: UserConstants.SIGN_OUT_SUCCESS,
    payload: user,
  };
};
export const signOutFailure = (error) => {
  return {
    type: UserConstants.SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signUpStart = (email, password, displayName) => {
  return {
    type: UserConstants.SIGN_UP_START,
    payload: { email, password, displayName },
  };
};
export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: UserConstants.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};
export const signUpFailure = () => {
  return {
    type: UserConstants.SIGN_UP_FAILURE,
  };
};
export const sendPasswordResetEmailStart = (email) => {
  return {
    type: UserConstants.SEND_PASSWORD_RESET_EMAIL_START,
    payload: email,
  };
};

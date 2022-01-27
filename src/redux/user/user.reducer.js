import UserConstants from "./user.constants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserConstants.SIGN_IN_SUCCESS:
    case UserConstants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserConstants.SIGN_IN_FAILURE:
    case UserConstants.SIGN_OUT_FAILURE:
    case UserConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

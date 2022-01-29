import ShopConstants from "./shop.constants";

const INITIAL_STATE = {
  collections: {},
  isFetching: false,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopConstants.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };
    case ShopConstants.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
        errorMessage: null,
      };
    case ShopConstants.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

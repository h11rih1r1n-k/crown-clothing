import ShopConstants from "./shop.constants";

export const fetchCollectionStart = () => {
  return {
    type: ShopConstants.FETCH_COLLECTIONS_START,
  };
};
export const fetchCollectionSuccess = (collectionMap) => {
  return {
    type: ShopConstants.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
  };
};
export const fetchCollectionFailure = (errorMessage) => {
  return {
    type: ShopConstants.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

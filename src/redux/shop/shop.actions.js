import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./shop.constants";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

const fetchCollectionStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};
const fetchCollectionSuccess = (collectionMap) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
  };
};
const fetchCollectionFailure = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};

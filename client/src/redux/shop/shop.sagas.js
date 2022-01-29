import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import ShopConstants from "./shop.constants";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

function* fetchCollectionStart() {
  yield takeLatest(
    ShopConstants.FETCH_COLLECTIONS_START,
    fetchCollectionStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}

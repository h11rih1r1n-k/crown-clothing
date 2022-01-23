import { UPDATE_COLLECTIONS } from "./shop.constants";

export const updateCollections = (collectionMap) => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionMap,
  };
};

import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectShopPreviewCollections = createSelector(
  [selectShopCollections],
  (collection) => Object.values(collection)
);

const selectCollectionCategory = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collection) => collection[collectionUrlParam]
  );

export {
  selectShopCollections,
  selectShopPreviewCollections,
  selectCollectionCategory,
};

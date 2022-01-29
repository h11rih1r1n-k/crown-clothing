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

const selectCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

const selectCollectionLoaded = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).length !== 0
);

export {
  selectShopCollections,
  selectShopPreviewCollections,
  selectCollectionCategory,
  selectCollectionFetching,
  selectCollectionLoaded,
};

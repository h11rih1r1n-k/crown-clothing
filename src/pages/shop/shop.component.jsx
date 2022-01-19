import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";

const ShopPage = ({ selectShopCollections }) => (
  <div>
    {selectShopCollections.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);

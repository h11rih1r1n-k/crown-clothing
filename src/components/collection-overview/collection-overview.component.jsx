import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopPreviewCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

function CollectionOverview({ selectShopPreviewCollections }) {
  return (
    <div className="collection-overview">
      {selectShopPreviewCollections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  selectShopPreviewCollections,
});

export default connect(mapStateToProps)(CollectionOverview);

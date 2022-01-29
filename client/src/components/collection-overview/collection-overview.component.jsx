import React from "react";
import { useSelector } from "react-redux";
import { selectShopPreviewCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

function CollectionOverview({ ...otherProps }) {
  const previewCollections = useSelector(selectShopPreviewCollections);
  return (
    <div className="collection-overview">
      {previewCollections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} {...otherProps} />
      ))}
    </div>
  );
}

export default CollectionOverview;

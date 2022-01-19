import React from "react";
import { connect } from "react-redux";
import { selectCollectionCategory } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

function CollectionPage({ collections }) {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollectionCategory(ownProps.match.params.categoryId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);

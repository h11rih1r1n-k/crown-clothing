import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import "./shop.styles.scss";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverviewContainer} />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;

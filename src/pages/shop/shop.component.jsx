import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.unsubscribeFromSnapshot = null;
  }

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = await convertCollectionSnapshotToMap(snapshot);
        this.props.updateCollections(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

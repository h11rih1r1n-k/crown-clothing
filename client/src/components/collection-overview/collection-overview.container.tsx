import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

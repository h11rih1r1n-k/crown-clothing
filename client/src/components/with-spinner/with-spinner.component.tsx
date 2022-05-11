import Spinner from "../spinner/spinner.component";
import { HOC, LoaderStatusType } from "@types";

const WithSpinner =
  (WrappedComponent: HOC) =>
  ({ isLoading, ...otherProps }: LoaderStatusType) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;

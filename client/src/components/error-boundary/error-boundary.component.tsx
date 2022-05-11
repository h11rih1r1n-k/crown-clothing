import  { Component } from "react";
import "./error-boundary.styles.scss";
import {ErrorBoundaryType} from '@types';

class ErrorBoundary extends Component<ErrorBoundaryType> {
  state = {
      errorOccured: false,
    };

  static getDerivedStateFromError<T>(error: T) {
    return { errorOccured: true };
  }

  componentDidCatch<T, U>(error: T, info: U) {
    console.log(error);
  }

  render() {
    if (this.state.errorOccured)
      return (
        <div className="error-image-overlay">
          <div
            className="error-image-container"
            style={{
              backgroundImage: `url(https://i.imgur.com/yW2W9SC.png)`,
            }}
          ></div>
          <h2 className="error-image-text">Something went wrong !!</h2>
        </div>
      );
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;

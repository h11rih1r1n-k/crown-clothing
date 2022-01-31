import React, { Component } from "react";
import "./error-boundary.styles.scss";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      errorOccured: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { errorOccured: true };
  }

  componentDidCatch(error, info) {
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

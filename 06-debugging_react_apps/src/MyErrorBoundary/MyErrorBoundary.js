import React from "react";

class MyErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ""
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true, errorMessage: error.toString()})
  }

  render() {
    if (this.state.hasError) {
      return (
          <div>
            <h1>MyErrorBoundary Catch: </h1>
            <h2 style={{color: "red"}}> {this.state.errorMessage}</h2>
          </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default MyErrorBoundary;
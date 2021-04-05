import React from "react";
import './App.css';
import MyErrorBoundary from "./MyErrorBoundary/MyErrorBoundary";
import MyRandomError from "./MyRandomError/MyRandomError";

class Section06 extends React.Component {
  render() {
    return  (
        <MyErrorBoundary>
          <MyRandomError/>
        </MyErrorBoundary>
    );
  }
}

export default Section06;

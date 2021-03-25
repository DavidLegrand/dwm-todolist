import React from "react";
import PropTypes from "prop-types";

class TestClassComponent extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
TestClassComponent.propTypes = {
  //
};

export default TestClassComponent;

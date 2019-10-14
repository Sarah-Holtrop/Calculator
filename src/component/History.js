import React from "react";
import PropTypes from "prop-types";

import "./History.css";

export default class History extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-history">
        <div>{this.props.totalHistory}{this.props.operationHistory}{this.props.nextHistory} </div>
        {/* <div></div> */}
      </div>
    );
  }
}
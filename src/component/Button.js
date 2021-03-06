import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    red: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  // added this.props.red
  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
      this.props.red ? "red" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

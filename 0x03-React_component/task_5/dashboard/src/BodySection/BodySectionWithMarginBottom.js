import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySection.css";

export default class BodySectionWithMarginBottom extends Component {
  render() {
    return (
        <div className="bodySectionWithMargin">
          <BodySection  {...this.props}/>
        </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.element.isRequired,
};

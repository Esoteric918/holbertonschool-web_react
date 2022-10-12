import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import "./CourseList.css";

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const style = {
      tr_bg: {backgroundColor: textSecondCell < 30 ? "#deb5b545" : "#f5f5f5ab"},

    }

    if (isHeader) {
      if (textSecondCell) {
        return <tr><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
      } else {
        return <tr><th colSpan="2">{textFirstCell}</th></tr>;
      }
    }
    return <tr style={style.tr_bg}><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default CourseListRow;

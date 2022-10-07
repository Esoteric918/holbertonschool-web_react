import React, { Component } from 'react';
import PropTypes from 'prop-types';


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
      if (textSecondCell) {
        return (
          <tr>
            <th colSpan="2">{textFirstCell}</th>
            <th colSpan="2">{textSecondCell}</th>
          </tr>
        );
      }
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
};
export default CourseListRow;

import React, { Component } from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';



export default class CourseList extends Component {
  render() {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: []
}


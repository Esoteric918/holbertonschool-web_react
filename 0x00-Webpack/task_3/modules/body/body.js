import $ from 'jquery';
import _ from 'lodash';
import './body.css';

// append the body to the DOM
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);

// on click, update the counter
$('button').on('click',_.debounce(updateCounter, 500,{ 'leading': true }));

let count = 0;
function updateCounter() {
  // udpate the count variable on each click
  count += 1;
  $('#count').html(`${count} clicks on the button`);
}

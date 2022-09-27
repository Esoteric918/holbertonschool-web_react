import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
//
$('button').on('click',_.debounce(updateCounter, 500,{ 'leading': true }));

let count = 0;
function updateCounter() {
  // udpate the count variable on each click
  count += 1;
  $('#count').html(`${count} clicks on the button`);
}

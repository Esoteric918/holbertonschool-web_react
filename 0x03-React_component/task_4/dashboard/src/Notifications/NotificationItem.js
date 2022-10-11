import React from 'react'
import PropTypes from 'prop-types'

// creat new class NotificationItem that extends React.Component

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead } = this.props;
    console.log(type, value, html, markAsRead);
    if (html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead} />
      )} else {
        return (
         <li data-notification-type={type} onClick={markAsRead}>
          {value}
        </li>
        );
      }

    }
  }
// const NotificationItem = ({ type, value, html, markAsRead, id }) => {
//   if (value) {
//     return (
//       <li data-notification-type={type} onClick={markAsRead(id)}>
//         {html ? html : value}
//       </li>
//     );
//   }
//   return(
//     <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead(id)} />
//   );

// }

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};
NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  html: null,
  markAsRead: () => {},
};
export default NotificationItem

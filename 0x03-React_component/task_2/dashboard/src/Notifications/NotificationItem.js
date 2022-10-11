import React from 'react'
import PropTypes from 'prop-types'

// creat new class NotificationItem that extends React.Component

// class NotificationItem extends React.Component {

//   render() {
//     const { type, value, html, markAsRead, id } = this.props;
//     if (value) {
//       <li data-notification-type={type} onClick={() => markAsRead(id)}>
//         {html ? html : value}
//       </li>
//     } else {
//       <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} />
//     }
//     return
//   }
// }

const NotificationItem = ({ type, value, html, markAsRead }) => {
  if (value) {
    return (
      <li data-notification-type={type} onClick={markAsRead}>
        {html ? html : value}
      </li>
    );
  }
  return(
    <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead} />
  );

}

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

import React, { memo } from 'react'
import PropTypes from 'prop-types'

// creat new class NotificationItem that extends React.Component

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead } = this.props;
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
export default memo(NotificationItem);

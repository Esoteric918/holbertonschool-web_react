import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

const NotificationItem = ({ type, html, value, markAsRead }) => {
  const itemUrgent = type === 'urgent' ? styles.urgent : styles.default;
  const itemDefault = type === 'default' ? styles.default : styles.urgent;
  if (value) {
    return (
      <li
        data-notification-type={type}
        className={css(itemUrgent)}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  } else {
    return (
      <li
        className={css(itemDefault)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={markAsRead}
      />
    );
  }
};



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

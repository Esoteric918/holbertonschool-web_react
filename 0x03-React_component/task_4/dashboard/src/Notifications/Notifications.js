import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

// creat a new React component Notifications

export default class Notifications extends React.Component {
  // constructor() {
  //   super();
  //   this.markAsRead = this.markAsRead.bind(this);
  // } // end of constructor

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <><div className='menuItem'> Your notifications </div>
      {displayDrawer && (
        <div className="Notifications">
        {
          listNotifications.length ?
          <>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => this.markAsRead(notification.id)} />
              ))}
            </ul>
          </>
          : <p>No New notifications for now</p>
        }

      <button
        style={{
          border: 0,
          background: 'white',
          position: 'absolute',
          right: 95,
          top: 90,
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} height="15px" width="15" alt="close icon" />
      </button>
    </div>)}
    </>
  );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};

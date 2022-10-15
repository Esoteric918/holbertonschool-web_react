import React from 'react';
import PropTypes from 'prop-types';
// import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


// set oject opacity
const objOpacity = {  from: { opacity: 0.5 }, to: { opacity: 1 } };
//create bouce animation
const bounceEffect = {  from : { transform: 'translateY(0px)' }, to : { transform: 'translateY(-5px)' } };


const styles = StyleSheet.create({
  holeNote: {
    position: 'absolute',
    right: 0,
    '@media (max-width: 900px)': {
      position: 'relative',
    },
  },
  Notif: {
    display: 'block',
    fontSize: 20,
    padding: '10px 8px',
    border: '1px dashed #ce314b',
    '@media (min-width: 900px)': {
      marginRight: '1rem',
      float: 'right',
    },
  },
  menuItem: {
    position: 'fixed',
    right: 5,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    marginBottom: '1rem',

    ':hover': {
      animationName: [bounceEffect],
      animationDuration: '0.5s',
      animationIterationCount: 3,
    },
    '@media (max-width: 900px)': {
     display: 'none',
    },
  },
  notifList: {
    listStyle: 'none',
    fontSize: 20,
    '@media (min-width: 900px)': {
      zIndex: '1',
      border: '1px red dashed',
      padding: '1rem 7rem 2rem 2rem',
    },
  },
  closeBtn: {
    border: 0,
    position: 'absolute',
    right: 35,
    top: 65,
  },
});


class Notifications extends React.Component {
  // function that marks a notification as read
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  // function that makes the file only update when next listNotifications is longer than current
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.holeNote)}>
        <div className={css(styles.menuItem)} id="menuItem">Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.Notif)} id="Notifs">
            {listNotifications.length
              ? <p>Here is the list of notifications</p>
              : <p>No new notification for now</p>}
            {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type ? notif.type : 'default'}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}
            <button
              type="button"
              aria-label="Close"
              className={css(styles.closeBtn)}
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt="Close"
                width="15px"
                height="15px"
                border="0"
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

// set the default props for the Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
// set default props
Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};

export default Notifications;

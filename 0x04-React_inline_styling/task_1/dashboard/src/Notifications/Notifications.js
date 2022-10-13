import React from 'react';
import PropTypes from 'prop-types';
// import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  Notifications: {
    border: '1px dashed #e0354b',
    // display: 'flex',
    flexDirection: 'column',
    float: 'right',
    marginRight: '1rem',
		top:'2rem',
		right:'1rem',

  },
  menuItem: {
    // position: 'absolute',
    marginBottom: '1rem',

  },
  closeIcon: {
    border: 0,
    background: 'transparent',
    position: 'absolute',
    right: 45,
    top: 65,
		cursor: 'pointer',
  },
	closeImg: {
		width: '1.5rem',
		height: '1.5rem',
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
      <React.Fragment>
			<div className={`menuItem ${css(styles.menuItem)}`} id="menuItem"> Your notifications </div>
				{displayDrawer && (
					<div className={`Notifictions ${css(styles.Notifications)}`}>
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
					type="button"
					aria-label="Close"
					className={css(styles.closeIcon)}
					onClick={() => console.log('Close button has been clicked')}
					>
					<img
						src={closeIcon}
						height="15px"
						alt="close"
						className={css(styles.closeImg)}/>
				</button>
			</div>
			)}
    </React.Fragment>
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

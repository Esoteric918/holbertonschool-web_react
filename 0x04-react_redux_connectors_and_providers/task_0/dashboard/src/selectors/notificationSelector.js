import { Map } from 'immutable';

export const filterTypeSelected = (state) => (state.filter);

export const getNotifications = (state) => Map(state.notifications);

export const getUnreadNotifications = (state) => Map(state.notifications.filter((notification) => notification.isRead === false));

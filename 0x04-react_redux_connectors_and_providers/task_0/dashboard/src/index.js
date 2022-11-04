import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider} from 'react-redux';
import uiReducer  from './reducers/uiReducer';

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

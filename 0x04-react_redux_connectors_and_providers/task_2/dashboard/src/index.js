import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ReduxApp } from './App/App';
import { Provider} from 'react-redux';



ReactDOM.render(
  <React.StrictMode>

      <ReduxApp />

  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className='notifications'>
      <buttons style={{
        float: 'right',
        border: 'none',
        background: 'white',
        color: 'black',
      }}
      aria-label='Close'
      onClick{...() => {
        console.log('Close button has been clicked');
      }}>
        <img src='close-icon.png' alt='' style={{ height: '15px', width: '15px' }} />
      </buttons>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

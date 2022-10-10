import React from 'react';
import ReactDOM  from 'react-dom';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('calls logOut function when control and h are pressed', () => {
    const logOut = jest.spyOn();
    const wrapper = shallow(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    wrapper.instance().handleKeydown(event);
    expect(logOut).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks();
  });

  it('renders Header component', () => {
    const wrapper = shallow(<App isLoggedIn={true}  displayDrawer={true} />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('renders Login component', () => {
    const wrapper = shallow(<App  isLoggedIn={true}  displayDrawer={true} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  })

  it('renders Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={true}  displayDrawer={true} />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  })

});

describe('App - isLoggedIn', () => {
  it('renders CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  })
  it('does not render Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  })
});

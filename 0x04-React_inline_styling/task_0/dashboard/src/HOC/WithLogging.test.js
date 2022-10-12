import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  it('should log on mount and unmount', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = mount(< WithLogging Wrapped={<Login />} />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
  });

  it('should log on mount and unmount with component name', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = mount(< WithLogging Wrapped={<Login />} />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
// import render  from '@testing-library/react';
import WithLogging from './WithLogging';

// write a test for the WithLogging HOC
// The first test should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html
// The second test should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component. Component Login is mounted and Component Login is going to unmount should be sent to the console

describe('WithLogging', () => {
  it('should log on mount and unmount', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = WithLogging('div');
    const wrapper = shallow(<Component />);
    expect(spy).toHaveBeenCalledWith('Component div mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component div unmounted');
  });

  it('should log on mount and unmount with component name', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = WithLogging('Login');
    const wrapper = shallow(<Component />);
    expect(spy).toHaveBeenCalledWith('Component Login mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login unmounted');
  });
});

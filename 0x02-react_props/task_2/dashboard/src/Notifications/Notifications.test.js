import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders NotificationIem without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders correct html', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.html()).toContain('<li data-notification-type="default"></li>');
  });
  it('renders correct html with type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" />);
    expect(wrapper.html()).toContain('<li data-notification-type="urgent"></li>');
  });
  it('renders correct html with type and value', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test" />);
    expect(wrapper.html()).toContain('<li data-notification-type="urgent">test</li>');
  });
  it('renders correct html with type and html', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<li data-notification-type="urgent"><u>test</u></li>');
  });
});

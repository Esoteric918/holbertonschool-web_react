import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import { getLatestNotification } from '../utils/utils';

const notesList = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
  ];

describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Checks first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.text()).toContain('Your notifications');
	})

  it('Checks that menuIitem is renderd when displayDrawer false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').length).toEqual(1);
  });

  it('Checks that the div.Notifications is being displayed', () => {
    const wrapper = shallow(<Notifications  displayDrawer={false}/>);
    expect(wrapper.find('.Notifications').length).toEqual(0);
  })

  it('Checks that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})


  it('Checks that the div Notifications is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.Notifications').length).toBe(1);
	})

  it('Check that Notifications renders if passed an empty array or listNotifications', () => {
     const wrapper = shallow(<Notifications listNotifications={[]}/>);
      expect(wrapper.find('.Notifications').length).toEqual(0);
  })

  it('Check that Notifications renders if passed an array with three items or listNotifications', () => {
    const wrapper = shallow(<Notifications listNotifications={notesList}/>);
    expect(wrapper.find('.Notifications').exists());
  })
  it(' when listNotifications is empty the message Here is the list of notifications is not displayed', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find('.Notifications p').length).toEqual(0);
  })
});

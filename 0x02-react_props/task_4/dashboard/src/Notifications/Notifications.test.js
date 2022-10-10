import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';


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
    expect(wrapper.find('.Notifications').length).toEqual(1);
  })

  it('Checks that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	})


  it('Checks that the div Notifications is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.Notifications').length).toBe(1);
	})

});

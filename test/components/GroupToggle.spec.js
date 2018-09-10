import React from 'react';
import { mount } from 'enzyme';

import GroupToggle from 'components/GroupToggle';

function setup() {
  return mount(<GroupToggle />);
}

describe('GroupToggle', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    const activeButtonElement = wrapper.find('.app__group__toggle__button');
    activeButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

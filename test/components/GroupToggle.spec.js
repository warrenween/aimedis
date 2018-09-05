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
    expect(wrapper.find('.app__group__toggle')).toExist();
    expect(wrapper.find('.app__group__toggle__button')).toExist();
    expect(wrapper.find('.app__group__toggle__button__team')).toExist();
    expect(wrapper.find('.app__group__toggle__button__board')).toExist();
    expect(wrapper.find('.app__group__toggle__content')).toExist();
  });
});

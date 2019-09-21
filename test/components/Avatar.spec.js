import React from 'react';
import { mount } from 'enzyme';

import Avatar from 'components/Avatar';

function setup() {
  return mount(<Avatar />);
}

describe('Avatar', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

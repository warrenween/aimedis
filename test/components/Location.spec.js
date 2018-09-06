import React from 'react';
import { mount } from 'enzyme';

import Location from 'components/Location';

function setup() {
  return mount(<Location />);
}

describe('Location', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import Feature from 'components/Feature';

function setup() {
  return mount(<Feature />);
}

describe('Feature', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

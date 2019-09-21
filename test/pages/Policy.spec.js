import React from 'react';
import { shallow } from 'enzyme';

import Policy from 'pages/Policy';

function setup() {
  return shallow(<Policy />);
}

describe('Policy', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Support from 'pages/Support';

function setup() {
  return shallow(<Support />);
}

describe('Support', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

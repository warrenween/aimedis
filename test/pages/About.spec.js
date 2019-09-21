import React from 'react';
import { shallow } from 'enzyme';

import About from 'pages/About';

function setup() {
  return shallow(<About />);
}

describe('About', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

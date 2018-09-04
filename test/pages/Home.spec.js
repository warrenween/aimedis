import React from 'react';
import { shallow } from 'enzyme';

import Home from 'pages/Home';

function setup() {
  return shallow(<Home />);
}

describe('Home', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

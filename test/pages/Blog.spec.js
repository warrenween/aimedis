import React from 'react';
import { shallow } from 'enzyme';

import Blog from 'pages/Blog';

function setup() {
  return shallow(<Blog />);
}

describe('Blog', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Terms from 'pages/Terms';

function setup() {
  return shallow(<Terms />);
}

describe('Terms', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

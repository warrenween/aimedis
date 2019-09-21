import React from 'react';
import { shallow } from 'enzyme';

import Career from 'pages/Career';

function setup() {
  return shallow(<Career />);
}

describe('Career', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

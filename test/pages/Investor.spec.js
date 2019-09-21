import React from 'react';
import { shallow } from 'enzyme';

import Investor from 'pages/Investor';

function setup() {
  return shallow(<Investor />);
}

describe('Investor', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

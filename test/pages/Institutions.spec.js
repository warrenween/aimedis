import React from 'react';
import { shallow } from 'enzyme';

import Institutions from 'pages/Institutions';

function setup() {
  return shallow(<Institutions />);
}

describe('Institutions', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Product from 'pages/Product';

function setup() {
  return shallow(<Product />);
}

describe('Product', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

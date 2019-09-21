import React from 'react';
import { shallow } from 'enzyme';

import CareerDetail from 'pages/CareerDetail';

function setup() {
  return shallow(<CareerDetail />);
}

describe('CareerDetail', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

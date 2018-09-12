import React from 'react';
import { mount } from 'enzyme';

import GetEarlyAccess from 'components/GetEarlyAccess';

function setup() {
  return mount(<GetEarlyAccess />);
}

describe('GetEarlyAccess', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
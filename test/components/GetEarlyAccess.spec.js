import React from 'react';
import { mount } from 'enzyme';

import GetEarlyAccess from 'components/GetEarlyAccess';

function setup() {
  return mount(<GetEarlyAccess />);
}

describe('GetEarlyAccess', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    const input = wrapper.find('.app__get__early__access__input');
    input.simulate('blur');
    expect(wrapper.state().flag).toEqual('INVALIDATE');

    input.simulate('blur', { target: { value: 'email@outlook.com' } });
    expect(wrapper.state().flag).toEqual('VALIDATE');
  });
});

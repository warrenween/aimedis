import React from 'react';
import { shallow } from 'enzyme';

import BlogDetail from 'pages/BlogDetail';

function setup() {
  return shallow(<BlogDetail />);
}

describe('BlogDetail', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

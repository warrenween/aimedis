import React from 'react';
import { mount } from 'enzyme';

import VideoMask from 'components/VideoMask';

function setup() {
  return mount(<VideoMask />);
}

describe('VideoMask', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

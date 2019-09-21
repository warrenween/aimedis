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

    const playButtonElement = wrapper.find('.app__video__mask__button');
    playButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();

    const stopButtonElement = wrapper.find('.app__video__mask__player__close');
    stopButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

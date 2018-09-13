import React from 'react';
import { mount } from 'enzyme';

import CustomVideo from 'components/CustomVideo';

function setup(poster = 'video.png', src = 'http://media.w3.org/2010/05/bunny/movie.mp4') {
  return mount(<CustomVideo
    poster={poster}
    src={src}
  />);
}

describe('CustomVideo', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import Carousel from 'components/Carousel';

function setup() {
  return mount(<Carousel />);
}

describe('Carousel', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    const prevButtonElement = wrapper.find('.app__carousel__indicator__prev');
    prevButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();

    const nextButtonElement = wrapper.find('.app__carousel__indicator__next');
    nextButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

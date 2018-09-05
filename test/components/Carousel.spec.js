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
    expect(wrapper.find('.app__carousel')).toExist();
    expect(wrapper.find('.app__carousel__content')).toExist();
    expect(wrapper.find('.app__carousel__content__inner')).toExist();

    expect(wrapper.find('.prev')).toExist();
    expect(wrapper.find('.prev img')).toExist();

    expect(wrapper.find('.active')).toExist();
    expect(wrapper.find('.active .app__carousel__content__inner__item__description')).toExist();
    expect(wrapper.find('.active .app__carousel__content__inner__item__name')).toExist();
    expect(wrapper.find('.active .app__carousel__content__inner__item__caption')).toExist();
    expect(wrapper.find('.active .app__carousel__content__inner__item__quotation')).toExist();

    expect(wrapper.find('.next')).toExist();
    expect(wrapper.find('.next img')).toExist();
  });
});

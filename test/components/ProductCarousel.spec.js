import React from 'react';
import { mount } from 'enzyme';

import ProductCarousel from 'components/ProductCarousel';

function setup() {
  return mount(<ProductCarousel />);
}

describe('ProductCarousel', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.find('.app__product__carousel')).toExist();
    expect(wrapper.find('.app__product__carousel__content')).toExist();
    expect(wrapper.find('.app__product__carousel__content__inner')).toExist();
    expect(wrapper.find('.app__product__carousel__content__external')).toExist();
    expect(wrapper.find('.app__product__carousel__content__external__content')).toExist();

    const activeButtonElement = wrapper.find('.app__product__carousel__content__external__content__item.item1');
    activeButtonElement.simulate('click');
  });
});

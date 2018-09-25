import React from 'react';
import { mount } from 'enzyme';

import ProductItem from 'components/ProductItem';

function setup(align, description = 'Description', src = 'Product1.png', title = 'Title') {
  return mount(<ProductItem
    align={align}
    description={description}
    src={src}
    title={title}
  />);
}

describe('ProductItem', () => {
  const leftWrapper = setup('left');

  it('should render properly', () => {
    expect(leftWrapper.html()).toMatchSnapshot();
  });

  const rightWrapper = setup('right');

  it('should render properly', () => {
    expect(rightWrapper.html()).toMatchSnapshot();

    const playButtonElement = rightWrapper.find('.app__product__item__content__info__button');
    playButtonElement.simulate('click');

    expect(rightWrapper.html()).toMatchSnapshot();

    const stopButtonElement = rightWrapper.find('.app__product__item__content__player__close');
    stopButtonElement.simulate('click');

    expect(rightWrapper.html()).toMatchSnapshot();
  });
});

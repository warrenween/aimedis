import React from 'react';
import { mount } from 'enzyme';

import ProductItem from 'components/ProductItem';

function setup(align = 'left', description = 'Description', src = 'Product1.png', title = 'Title') {
  return mount(<ProductItem
    align={align}
    description={description}
    src={src}
    title={title}
  />);
}

describe('ProductItem', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__product__item')).toExist();
    expect(wrapper.find('.app__product__item__content')).toExist();
    expect(wrapper.find('.app__product__item__content__info')).toExist();
    expect(wrapper.find('.app__product__item__content__info__description')).toHaveText('Description');
    expect(wrapper.find('.app__product__item__content__info__title')).toHaveText('Title');
    expect(wrapper.find('.app__product__item__content img')).toExist();
  });
});

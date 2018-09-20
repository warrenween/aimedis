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
  });
});

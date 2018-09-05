import React from 'react';
import { mount } from 'enzyme';

import BlogItem from 'components/BlogItem';

function setup(item = { description: 'Description', id: 1, src: 'blog1.png', title: 'Title' }) {
  return mount(<BlogItem item={item} />);
}

describe('BlogItem', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__blog__item')).toExist();
    expect(wrapper.find('.app__blog__item__content')).toExist();
    expect(wrapper.find('.app__blog__item__content__img')).toExist();
    expect(wrapper.find('.app__blog__item__content__title')).toHaveText('Title');
    expect(wrapper.find('.app__blog__item__content__description')).toHaveText('Description');
  });
});

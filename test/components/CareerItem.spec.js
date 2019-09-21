import React from 'react';
import { mount } from 'enzyme';

import CareerItem from 'components/CareerItem';

function setup(item = { availability: '', id: 1, location: '', subtitle: 'SubTitle', title: 'Title' }) {
  return mount(<CareerItem item={item} />);
}

describe('CareerItem', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__career__item')).toExist();
    expect(wrapper.find('.app__career__item__content')).toExist();
    expect(wrapper.find('.app__career__item__content__info')).toExist();
    expect(wrapper.find('.app__career__item__content__info__title')).toHaveText('Title');
    expect(wrapper.find('.app__career__item__content__info__subtitle')).toHaveText('SubTitle');
  });
});

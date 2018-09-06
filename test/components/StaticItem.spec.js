import React from 'react';
import { mount } from 'enzyme';

import StaticItem from 'components/StaticItem';

function setup(icon = 'your-health-data-in-one-place', title = 'Title') {
  return mount(<StaticItem
    icon={icon}
    title={title}
  />);
}

describe('StaticItem', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__static__item')).toExist();
    expect(wrapper.find('.app__static__item__icon')).toExist();
    expect(wrapper.find('.app__static__item__icon__img')).toExist();
    expect(wrapper.find('.app__static__item__title')).toHaveText('Title');
  });
});

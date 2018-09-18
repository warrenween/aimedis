import React from 'react';
import { mount } from 'enzyme';

import OfferItem from 'components/OfferItem';

function setup(last = false, icon = 'your-health-data-in-one-place', title = 'Title') {
  return mount(<OfferItem
    icon={icon}
    last={last}
    title={title}
  />);
}

describe('OfferItem', () => {
  const defaultWrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(defaultWrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(defaultWrapper.find('.app__offer__item')).toExist();
    expect(defaultWrapper.find('.app__offer__item__content')).toExist();
    expect(defaultWrapper.find('.app__offer__item__content__icon')).toExist();
    expect(defaultWrapper.find('.app__offer__item__content__title')).toHaveText('Title');
  });

  const lastWrapper = setup(true);

  it('should render properly which [last is true]', () => {
    expect(lastWrapper.find('.app__offer__item')).toExist();
    expect(lastWrapper.find('.app__offer__item__content')).toExist();
    expect(lastWrapper.find('.app__offer__item__content__active')).toHaveText('See full product overview');
  });
});

import React from 'react';
import { mount } from 'enzyme';

import GroupToggleItem from 'components/GroupToggleItem';

function setup(last, facebook = '', linkedin = '', src = 'team1.png', subTitle = 'SubTitle', title = 'Title') {
  return mount(
    <GroupToggleItem
      facebook={facebook}
      last={last}
      linkedin={linkedin}
      src={src}
      subTitle={subTitle}
      title={title}
    />
  );
}

describe('GroupToggleItem', () => {
  const defaultWrapper = setup(false);

  it('should be a StatelessComponent', () => {
    expect(defaultWrapper.instance())
      .toBeNull();
  });

  it('should render properly', () => {
    expect(defaultWrapper.find('.app__group__toggle__item')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__content')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__image')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__image img')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__title')).toHaveText('Title');
    expect(defaultWrapper.find('.app__group__toggle__item__subtitle')).toHaveText('SubTitle');
    expect(defaultWrapper.find('.app__group__toggle__item__link')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__link__facebook')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__link__facebook img')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__link__linkedin')).toExist();
    expect(defaultWrapper.find('.app__group__toggle__item__link__linkedin img')).toExist();
  });

  const lastWrapper = setup(true);

  it('should render properly when [last is true]', () => {
    expect(lastWrapper.find('.app__group__toggle__item')).toExist();
    expect(lastWrapper.find('.app__group__toggle__item__content')).toExist();
    expect(lastWrapper.find('.app__group__toggle__item__last')).toExist();
    expect(lastWrapper.find('.app__group__toggle__item__last__image')).toExist();
    expect(lastWrapper.find('.app__group__toggle__item__last__image img')).toExist();
    expect(lastWrapper.find('.app__group__toggle__item__last__title')).toHaveText('Title');
    expect(lastWrapper.find('.app__group__toggle__item__last__subtitle')).toExist();
  });
});

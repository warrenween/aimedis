import React from 'react';
import { mount } from 'enzyme';

import Overview from 'components/Overview';

function setup(active = true, link = 'assets/media/images/institutions-web.png', order = 1, src = 'mobile.png', subtitle = 'SubTitle', title = 'Title') {
  return mount(
    <Overview
      active={active}
      link={link}
      order={order}
      src={src}
      subtitle={subtitle}
      title={title}
    />);
}

describe('Overview', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__overview')).toExist();
    expect(wrapper.find('.app__overview__internal')).toExist();
    expect(wrapper.find('.app__overview__internal__content')).toExist();
    expect(wrapper.find('.app__overview__internal__content__order')).toExist();
    expect(wrapper.find('.app__overview__internal__content__order__text')).toHaveText('1');
    expect(wrapper.find('.app__overview__internal__content__paragraph')).toExist();
    expect(wrapper.find('.app__overview__internal__content__paragraph__title')).toHaveText('Title');
    expect(wrapper.find('.app__overview__internal__content__paragraph__subtitle')).toHaveText('SubTitle');
    expect(wrapper.find('.app__overview__internal__content__next')).toExist();
    expect(wrapper.find('.app__overview__external')).toExist();
    expect(wrapper.find('.app__overview__external__image')).toExist();
  });
});

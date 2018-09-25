import React from 'react';
import { mount } from 'enzyme';

import OverviewList from 'components/OverviewList';

function setup() {
  return mount(
    <OverviewList
      list={[
        {
          id: 1,
          right: 'IMac.png',
          src: 'mobile.png',
          subtitle: 'In every actual browser',
          title: 'Fully responsive',
        }]}
    />);
}

describe('OverviewList', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    const activeButtonElement = wrapper.find('.app__overview__list__content__item');
    activeButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

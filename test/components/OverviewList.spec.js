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
  });
});

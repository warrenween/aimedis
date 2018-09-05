import React from 'react';
import { mount } from 'enzyme';

import BlogList from 'components/BlogList';

function setup() {
  return mount(<BlogList />);
}

describe('BlogList', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__blog__list')).toExist();
    expect(wrapper.find('.app__blog__list__content')).toExist();
    expect(wrapper.find('.app__blog__list__pagination')).toExist();
  });
});

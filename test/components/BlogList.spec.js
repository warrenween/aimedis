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

  describe('when user clicks button', () => {
    it('Calls element item to active', () => {
      const activeButtonElement = wrapper.find('.app__blog__list__pagination__item.active');
      expect(activeButtonElement.length).toBe(1);
      activeButtonElement.simulate('click');
    });

    it('Calls prev item to active', () => {
      const nextButtonElement = wrapper.find('.app__blog__list__pagination__next');
      expect(nextButtonElement.length).toBe(1);
      nextButtonElement.simulate('click');
    });

    it('Calls next item to active', () => {
      const prevButtonElement = wrapper.find('.app__blog__list__pagination__prev');
      expect(prevButtonElement.length).toBe(1);
      prevButtonElement.simulate('click');
    });
  });
});

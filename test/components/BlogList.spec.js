import React from 'react';
import { mount } from 'enzyme';

import BlogList from 'components/BlogList';

function setup(count = 100) {
  return mount(<BlogList
    count={count}
  />);
}

describe('BlogList', () => {
  const wrapper = setup(100);

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Calls minium render properly', () => {
    const minWrapper = setup(1);
    expect(minWrapper.html()).toMatchSnapshot();
  });

  it('Calls small render properly', () => {
    const smallWrapper = setup(20);
    expect(smallWrapper.html()).toMatchSnapshot();
  });

  describe('when user clicks button', () => {
    const activeButtonElement = wrapper.find('.app__blog__list__pagination__item.active');
    const nextButtonElement = wrapper.find('.app__blog__list__pagination__next');
    const prevButtonElement = wrapper.find('.app__blog__list__pagination__prev');

    it('Calls element item to active', () => {
      expect(activeButtonElement.length).toBe(1);
      activeButtonElement.simulate('click');
    });

    it('Calls prev item to active', () => {
      expect(nextButtonElement.length).toBe(1);
      nextButtonElement.simulate('click');
    });

    it('Calls next item to active', () => {
      expect(prevButtonElement.length).toBe(1);
      prevButtonElement.simulate('click');
    });

    it('Calls count to active', () => {
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');
      nextButtonElement.simulate('click');

      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
      prevButtonElement.simulate('click');
    });
  });
});

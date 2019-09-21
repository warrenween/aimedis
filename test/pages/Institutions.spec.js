import React from 'react';
import { mount } from 'enzyme';

import Institutions from 'pages/Institutions';

function setup() {
  return mount(<Institutions />);
}

describe('Institutions', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    Element.prototype.scrollIntoView = jest.fn();

    const itemElement1 = wrapper.find('.app__institutions__section1__content__item1');
    itemElement1.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();

    const itemElement2 = wrapper.find('.app__institutions__section1__content__item2');
    itemElement2.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();

    const itemElement3 = wrapper.find('.app__institutions__section1__content__item3');
    itemElement3.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

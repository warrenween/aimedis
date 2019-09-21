import React from 'react';
import { shallow } from 'enzyme';

import Support from 'pages/Support';

function setup() {
  return shallow(<Support />);
}

describe('Support', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    const activeButtonElement = wrapper.find('.app__support__section1__content__form__button');
    activeButtonElement.simulate('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

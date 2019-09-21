import React from 'react';
import { mount } from 'enzyme';

import Title from 'components/Title';

function setup(subtitle = 'SubTitle', title = 'Title') {
  return mount(<Title
    subtitle={subtitle}
    title={title}
  />);
}

describe('Title', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__title')).toExist();
    expect(wrapper.find('.app__title__subtitle')).toHaveText('SubTitle');
    expect(wrapper.find('.app__title__title')).toHaveText('Title');
  });
});

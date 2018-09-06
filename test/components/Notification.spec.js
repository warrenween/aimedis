import React from 'react';
import { mount } from 'enzyme';

import Notification from 'components/Notification';

function setup(children = 'Hello World', icon = 'flash.png') {
  return mount(
    <Notification
      icon={icon}
    >{children}
    </Notification>);
}

describe('Notification', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.find('.app__notification')).toExist();
    expect(wrapper.find('.app__notification__icon')).toExist();
    expect(wrapper.find('.app__notification__content')).toHaveText('Hello World');
    expect(wrapper.find('.app__notification__close')).toExist();
  });
});

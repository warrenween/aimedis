import React from 'react';
import { shallow } from 'enzyme';

import Profile from 'pages/Profile';

function setup() {
  const props = {
    dispatch: () => {},
    location: {},
  };

  return shallow(<Profile {...props} />);
}

describe('Profile', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__profile')).toExist();
  });
});

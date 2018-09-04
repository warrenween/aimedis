import React from 'react';
import { mount } from 'enzyme';

import Header from 'components/Header';

const mockDispatch = jest.fn();

function setup() {
  const props = {
    dispatch: mockDispatch,
    router: {
      location: {
        pathname: '/',
      },
    },
    user: {
      isAuthenticated: false,
    },
  };

  return mount(<Header {...props} />);
}

describe('Header', () => {
  const wrapper = setup();

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

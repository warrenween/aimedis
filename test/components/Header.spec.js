import React from 'react';
import { mount } from 'enzyme';

import Header from 'components/Header';

const mockDispatch = jest.fn();

function setup(isAuthenticated = false) {
  const props = {
    dispatch: mockDispatch,
    router: {
      location: {
        pathname: '/',
      },
    },
    user: {
      isAuthenticated: isAuthenticated,
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

  describe('when user clicks button', () => {
    it('Calls element item to active', () => {
      const unAuthenticatedWrapper = setup(false);
      const closeButtonElement = unAuthenticatedWrapper.find('.app__header__menubar__form__close');
      closeButtonElement.simulate('click');
      expect(unAuthenticatedWrapper.html())
        .toMatchSnapshot();

      const loginElement = unAuthenticatedWrapper.find('.app__header__menubar__form__login');
      loginElement.simulate('click');

      expect(mockDispatch.mock.calls[0][0])
        .toEqual({
          type: 'USER_LOGIN',
          payload: {},
        });

      const authenticatedWrapper = setup(true);
      const logOutElement = authenticatedWrapper.find('.app__header__menubar__form__logout');
      logOutElement.simulate('click');
      expect(mockDispatch.mock.calls[0][0])
        .toEqual({
          type: 'USER_LOGIN',
          payload: {},
        });
    });
  });
});

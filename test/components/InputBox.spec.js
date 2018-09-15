import React from 'react';
import { mount } from 'enzyme';

import InputBox from 'components/InputBox';

const email = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

function setup(label = 'Name or Company', height = 3.5,  validate = '', validationString = '') {
  return mount(<InputBox
    label={label}
    height={height}
    validate={validate}
    validationString={validationString}
  />);
}

describe('InputBox', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('change state properly', () => {
    const nameWrapper = setup('Name or Company', 3.5);
    expect(nameWrapper.state().flag).toEqual('BEGINNING');

    const nameInput = nameWrapper.find('.app__input__text');
    nameInput.simulate('blur');
    expect(nameWrapper.state().flag).toEqual('VALIDATE');

    const emailWrapper = setup('Name or Company', 3.5, email);
    expect(emailWrapper.state().flag).toEqual('BEGINNING');

    const emailInput = emailWrapper.find('.app__input__text');
    emailInput.simulate('blur');
    expect(emailWrapper.state().flag).toEqual('INVALIDATE');
  });
});

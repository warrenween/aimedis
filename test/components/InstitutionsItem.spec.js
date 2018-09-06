import React from 'react';
import { mount } from 'enzyme';

import InstitutionsItem from 'components/InstitutionsItem';

function setup(align = 'left', description = 'Description', src = 'institutions-bg1.png', subtitle = 'SubTitle', title = 'Title') {
  return mount(<InstitutionsItem
    align={align}
    description={description}
    src={src}
    subtitle={subtitle}
    title={title}
  />);
}

describe('InstitutionsItem', () => {
  const wrapper = setup();

  it('should be a StatelessComponent', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(wrapper.find('.app__institutions__item')).toExist();
    expect(wrapper.find('.app__institutions__item__content')).toExist();
    expect(wrapper.find('.app__institutions__item__content__image')).toExist();
    expect(wrapper.find('.app__institutions__item__content__info')).toExist();
    expect(wrapper.find('.app__institutions__item__content__info__description')).toHaveText('Description');
  });
});

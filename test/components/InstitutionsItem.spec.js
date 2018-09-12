import React from 'react';
import { mount } from 'enzyme';

import InstitutionsItem from 'components/InstitutionsItem';

function setup(align, description = 'Description', src = 'institutions-bg1.png', subtitle = 'SubTitle', title = 'Title') {
  return mount(<InstitutionsItem
    align={align}
    description={description}
    src={src}
    subtitle={subtitle}
    title={title}
  />);
}

describe('InstitutionsItem', () => {
  const leftWrapper = setup('left');

  it('should be a StatelessComponent', () => {
    expect(leftWrapper.instance()).toBeNull();
  });

  it('should render properly', () => {
    expect(leftWrapper.html()).toMatchSnapshot();
  });

  const rightWrapper = setup('right');

  it('should render properly', () => {
    expect(rightWrapper.html()).toMatchSnapshot();
  });
});
